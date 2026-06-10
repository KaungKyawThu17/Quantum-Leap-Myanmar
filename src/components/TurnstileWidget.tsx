import { useEffect, useRef, useState } from "react";

const TURNSTILE_SCRIPT_ID = "cloudflare-turnstile-script";
const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

type TurnstileApi = {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string;
      action: string;
      theme: "auto";
      size: "flexible";
      callback: (token: string) => void;
      "error-callback": () => void;
      "expired-callback": () => void;
    },
  ) => string;
  remove: (widgetId: string) => void;
};

type TurnstileWindow = Window & {
  turnstile?: TurnstileApi;
};

let turnstileScriptPromise: Promise<TurnstileApi> | undefined;

function loadTurnstile() {
  const turnstileWindow = window as TurnstileWindow;
  if (turnstileWindow.turnstile) {
    return Promise.resolve(turnstileWindow.turnstile);
  }

  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise<TurnstileApi>((resolve, reject) => {
      const existingScript = document.getElementById(
        TURNSTILE_SCRIPT_ID,
      ) as HTMLScriptElement | null;
      const script = existingScript ?? document.createElement("script");

      const handleLoad = () => {
        if (turnstileWindow.turnstile) {
          resolve(turnstileWindow.turnstile);
        } else {
          reject(new Error("Cloudflare Turnstile did not initialize."));
        }
      };

      script.addEventListener("load", handleLoad, { once: true });
      script.addEventListener(
        "error",
        () => reject(new Error("Cloudflare Turnstile could not be loaded.")),
        { once: true },
      );

      if (!existingScript) {
        script.id = TURNSTILE_SCRIPT_ID;
        script.src = TURNSTILE_SCRIPT_URL;
        script.async = true;
        script.defer = true;
        document.head.appendChild(script);
      }
    });
  }

  return turnstileScriptPromise;
}

export function TurnstileWidget({
  siteKey,
  errorMessage,
  onTokenChange,
}: {
  siteKey: string;
  errorMessage: string;
  onTokenChange: (token: string) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || !siteKey) return;

    let cancelled = false;
    let widgetId: string | undefined;
    let api: TurnstileApi | undefined;

    loadTurnstile()
      .then((turnstile) => {
        if (cancelled) return;

        api = turnstile;
        widgetId = turnstile.render(container, {
          sitekey: siteKey,
          action: "contact",
          theme: "auto",
          size: "flexible",
          callback: (token) => {
            setHasError(false);
            onTokenChange(token);
          },
          "error-callback": () => {
            setHasError(true);
            onTokenChange("");
          },
          "expired-callback": () => onTokenChange(""),
        });
      })
      .catch((error) => {
        console.error(error);
        if (!cancelled) {
          setHasError(true);
          onTokenChange("");
        }
      });

    return () => {
      cancelled = true;
      if (api && widgetId) api.remove(widgetId);
      onTokenChange("");
    };
  }, [onTokenChange, siteKey]);

  if (!siteKey) {
    return (
      <p className="text-sm text-destructive" role="alert">
        {errorMessage}
      </p>
    );
  }

  return (
    <div>
      <div ref={containerRef} className="min-h-[65px]" />
      {hasError && (
        <p className="mt-2 text-sm text-destructive" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
