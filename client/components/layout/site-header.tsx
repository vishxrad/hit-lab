import { useState } from "react";
import { Activity, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Technologies", href: "#capabilities" },
  { label: "News", href: "#news" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((value) => !value);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur">
      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a
          href="#overview"
          className="flex items-center gap-3 text-left text-foreground transition-colors hover:text-primary"
          onClick={closeMenu}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Activity className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
              HTPM Alliance
            </span>
            <span className="text-sm font-semibold sm:text-base">
              高通量生醫服務聯盟
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button size="sm" className="hidden md:inline-flex" asChild>
            <a href="#contact">Join the Alliance</a>
          </Button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-border/70 p-2 text-foreground/80 transition-colors hover:border-border hover:text-foreground md:hidden"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        <div
          className={cn(
            "md:hidden",
            "absolute left-4 right-4 top-[calc(100%+0.75rem)] origin-top rounded-2xl border border-border/60 bg-background/95 p-5 shadow-xl backdrop-blur transition-all", // base
            isMenuOpen
              ? "pointer-events-auto translate-y-0 opacity-100"
              : "pointer-events-none -translate-y-2 opacity-0",
          )}
        >
          <nav className="flex flex-col gap-3 text-base font-medium text-foreground/80">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-lg px-2 py-2 transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <Button className="mt-5 w-full" size="lg" onClick={closeMenu} asChild>
            <a href="#contact">Join the Alliance</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
