import {
  Activity,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const quickLinks = [
  { label: "Overview", href: "#overview" },
  { label: "Technologies", href: "#capabilities" },
  { label: "News", href: "#news" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-foreground/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 py-16 md:grid-cols-[1.25fr,1fr,1fr]">
          <div className="max-w-lg">
            <div className="flex items-center gap-3 text-foreground">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Activity className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                  HTPM Alliance
                </span>
                <p className="mt-1 text-lg font-semibold">
                  成大高通量蛋白質微陣列技術與生醫產業服務聯盟
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              以成大高通量生物感測實驗室為核心，結合產學研夥伴打造跨領域蛋白體微陣列平台，
              提供從技術開發、檢測服務到臨床轉譯的完整支援。
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
              <a
                href="https://www.facebook.com/htpm.ncku"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 transition-colors hover:border-border hover:text-foreground"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                Facebook
              </a>
              <a
                href="https://www.instagram.com/ncku.htpm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 transition-colors hover:border-border hover:text-foreground"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                Instagram
              </a>
              <a
                href="https://htpm.web2.ncku.edu.tw/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 transition-colors hover:border-border hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                官方網站
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex items-center gap-2 transition-colors hover:text-foreground"
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-primary/50">
                      •
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                <span>
                  701 台南市東區大學路 1 號<br />
                  生醫卓群大樓 9 樓
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
                <a
                  href="tel:+88662353535,1535"
                  className="transition-colors hover:text-foreground"
                >
                  +886-6-2353535 ext.1535
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <a
                  href="mailto:11402047@gs.ncku.edu.tw"
                  className="transition-colors hover:text-foreground"
                >
                  11402047@gs.ncku.edu.tw
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/60 py-6">
          <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} National Cheng Kung University. All
              rights reserved.
            </p>
            <p>
              與產業攜手打造蛋白體微陣列生醫服務。
              <span className="ml-2 text-primary">NCKU HTPM Alliance</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
