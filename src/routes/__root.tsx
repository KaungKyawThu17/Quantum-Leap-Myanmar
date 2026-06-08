import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useLocation,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { LanguageProvider, useLanguage } from "@/i18n/LanguageContext";

import appCss from "../styles.css?url";
import logo from "@/assets/quantum-leap-logo.png";

const siteUrl = import.meta.env.VITE_SITE_URL?.trim();
const siteTitle = "QUANTUM LEAP — Myanmar OEM Beverage Manufacturing";
const siteDescription =
  "QUANTUM LEAP is a Myanmar-based OEM beverage manufacturer offering PET bottling, beverage formulation, and scale-up production solutions.";
const socialImageUrl = siteUrl ? new URL(logo, siteUrl).toString() : logo;
const preloadErrorRecoveryScript = `
window.addEventListener("vite:preloadError", function (event) {
  var key = "ql-preload-reload";
  var now = Date.now();
  var lastReload = Number(sessionStorage.getItem(key) || 0);

  if (now - lastReload > 10000) {
    event.preventDefault();
    sessionStorage.setItem(key, String(now));
    window.location.reload();
  }
});
`;

function getCanonicalUrl(pathname = "/") {
  if (!siteUrl) return undefined;

  return new URL(pathname, siteUrl).toString();
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you are looking for no longer exists or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="focus-ring inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page could not be loaded
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          A system issue occurred. You can try again or return to the home page.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="focus-ring inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <Link
            to="/"
            className="focus-ring inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: ({ matches }) => {
    const currentMatch = matches[matches.length - 1];
    const canonicalUrl = getCanonicalUrl(currentMatch?.pathname);

    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#17396f" },
        { title: siteTitle },
        { name: "description", content: siteDescription },
        { name: "author", content: "QUANTUM LEAP Beverage Manufacturing Co. Ltd." },
        { property: "og:title", content: siteTitle },
        { property: "og:description", content: siteDescription },
        { property: "og:type", content: "website" },
        ...(canonicalUrl ? [{ property: "og:url", content: canonicalUrl }] : []),
        { property: "og:site_name", content: "QUANTUM LEAP" },
        { property: "og:locale", content: "en_US" },
        { property: "og:image", content: socialImageUrl },
        { property: "og:image:alt", content: "QUANTUM LEAP OEM beverage manufacturing factory" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: siteTitle },
        { name: "twitter:description", content: siteDescription },
        { name: "twitter:image", content: socialImageUrl },
        { name: "twitter:image:alt", content: "QUANTUM LEAP OEM beverage manufacturing factory" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        ...(canonicalUrl ? [{ rel: "canonical", href: canonicalUrl }] : []),
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Noto+Sans+Myanmar:wght@400;500;600;700;800;900&display=swap",
        },
        { rel: "preload", as: "image", href: logo },
        { rel: "icon", href: logo },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: preloadErrorRecoveryScript }} />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <DocumentLanguageSync />
        <Outlet />
      </LanguageProvider>
    </QueryClientProvider>
  );
}

function DocumentLanguageSync() {
  const { lang, content } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang === "my" ? "my" : "en";
    const pathname = location.pathname.replace(/\/$/, "") || "/";
    const titles = content.common.documentTitles;
    document.title = titles[pathname as keyof typeof titles] ?? titles["/"];
  }, [content.common.documentTitles, lang, location.pathname]);

  return null;
}
