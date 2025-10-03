import {
  Activity,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function SiteFooter() {
  const { t } = useTranslation();
  
  const pageLinks = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.research"), href: "/research" },
    { label: t("nav.members"), href: "/members" },
    { label: t("nav.team"), href: "/team" },
  ];
  
  return (
    <footer className="border-t border-border/60 bg-foreground/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 py-16 md:grid-cols-[1.5fr,1fr,1fr]">
          {/* Brand Section */}
          <div className="max-w-lg">
            <div className="flex items-center gap-3 text-foreground">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Activity className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-primary/80">
                  {t("site.name")}
                </span>
                <p className="mt-1 text-base font-semibold">
                  {t("site.fullName")}
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {t("footer.tagline")}
            </p>
            
            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/nckuhitlab/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
                <span>Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/nckuhitlab/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>Instagram</span>
              </a>
              <a
                href="https://htpm.web2.ncku.edu.tw/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
              >
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
                <span>{t("nav.home") === "Home" ? "Website" : "官方網站"}</span>
              </a>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t("footer.quickLinks")}
            </h3>
            <ul className="mt-5 space-y-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              {t("contact.title")}
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="mt-1 h-4 w-4 flex-shrink-0 text-primary"
                  aria-hidden="true"
                />
                <span className="text-sm text-muted-foreground">
                  {t("footer.address")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                <a
                  href="tel:+88662353535,1535"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("contact.phoneValue")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                <a
                  href="mailto:11402047@gs.ncku.edu.tw"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("contact.emailValue")}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-border/60 py-6">
          <p className="text-center text-xs text-muted-foreground">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
