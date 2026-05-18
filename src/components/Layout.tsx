import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { ImagePreloader } from "./ImagePreloader";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
      <ImagePreloader />
    </div>
  );
}

