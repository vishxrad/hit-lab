import type { PropsWithChildren } from "react";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";

export function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:absolute focus:left-1/2 focus:top-4 focus:-translate-x-1/2 focus:rounded-full focus:bg-primary focus:px-6 focus:py-3 focus:text-sm focus:text-primary-foreground focus:shadow-lg"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="overview" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
