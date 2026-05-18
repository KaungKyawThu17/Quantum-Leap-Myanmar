import { useEffect } from "react";

// Glob-import all site image URLs at build time (Vite returns hashed URLs).
const imageModules = import.meta.glob(
  "/src/assets/*.{webp,jpg,jpeg,png}",
  { eager: true, query: "?url", import: "default" }
) as Record<string, string>;

const ALL_IMAGES = Object.values(imageModules);

let warmed = false;

/**
 * Mount once in Layout. After first paint, fetches every site image into
 * the browser cache so subsequent page navigations render images instantly.
 */
export function ImagePreloader() {
  useEffect(() => {
    if (warmed) return;
    warmed = true;

    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => void })
        .requestIdleCallback ?? ((cb: () => void) => setTimeout(cb, 200));

    idle(() => {
      for (const src of ALL_IMAGES) {
        const img = new Image();
        img.decoding = "async";
        img.src = src;
      }
    });
  }, []);

  return null;
}
