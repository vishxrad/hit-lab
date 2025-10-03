import { useTranslation } from "react-i18next";
import { AllianceInfo } from "@/components/custom/AllianceInfo";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  Mail,
  MapPin,
  Phone,
  PlayCircle,
  Search,
  TrendingUp,
  Users,
} from "lucide-react";

function HeroSection() {
  const { t } = useTranslation();
  
  const heroStats = [
    { label: t("hero.stats.partners"), value: "20+" },
    { label: t("hero.stats.targets"), value: "180+" },
    { label: t("hero.stats.turnaround"), value: "72 hrs" },
  ];
  
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-gradient-to-br from-primary/8 via-background to-background"
    >
      <div className="absolute -left-20 top-[-6rem] hidden h-72 w-72 rounded-full bg-primary/20 blur-3xl md:block" />
      <div className="absolute bottom-[-8rem] right-[-4rem] hidden h-80 w-80 rounded-full bg-accent/20 blur-3xl lg:block" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr,0.95fr] lg:py-24">
        <div className="space-y-6 lg:space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            {t("hero.tagline")}
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {t("hero.description")}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="shadow-lg shadow-primary/10" asChild>
              <a href="/research">
                {t("hero.exploreTech")}
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="backdrop-blur hover:border-primary/30"
              asChild
            >
              <a href="#news">
                <PlayCircle className="mr-2 h-4 w-4" aria-hidden="true" />
                {t("hero.viewNews")}
              </a>
            </Button>
          </div>
          <dl className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border/70 bg-card/80 px-4 py-4 shadow-sm"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-semibold text-foreground">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="relative flex flex-col overflow-hidden rounded-3xl border border-primary/15 bg-card/70 p-6 shadow-xl shadow-primary/10">
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted/30">
            <img
              src="https://htpm.web2.ncku.edu.tw/var/file/217/1217/randimg/mobileadv_2064_171142_38153.png"
              alt="蛋白體微陣列聯盟在成大高通量生物感測實驗室"
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
          <figcaption className="mt-4 space-y-3">
            <div className="flex items-center justify-between rounded-2xl bg-background/90 px-4 py-3 text-sm text-muted-foreground shadow">
              <div>
                <p className="font-medium text-foreground">
                  {t("hero.labTitle")}
                </p>
                <p>{t("hero.labDescription")}</p>
              </div>
              <TrendingUp className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
            </div>
            <div className="grid gap-2 text-xs">
              <div className="flex items-start gap-2 rounded-lg bg-primary/5 px-3 py-2">
                <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-muted-foreground">{t("hero.highlights.0")}</span>
              </div>
              <div className="flex items-start gap-2 rounded-lg bg-primary/5 px-3 py-2">
                <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-muted-foreground">{t("hero.highlights.1")}</span>
              </div>
              <div className="flex items-start gap-2 rounded-lg bg-primary/5 px-3 py-2">
                <span className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                <span className="text-muted-foreground">{t("hero.highlights.2")}</span>
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function NewsSection() {
  const { t } = useTranslation();
  
  const newsItems = [
    {
      title: t("news.items.0.title"),
      date: t("news.items.0.date"),
      href: "https://htpm.web2.ncku.edu.tw/p/450-1217-216731,c0.php?Lang=zh-tw",
      summary: t("news.items.0.summary"),
    },
    {
      title: t("news.items.1.title"),
      date: t("news.items.1.date"),
      href: "https://htpm.web2.ncku.edu.tw/p/406-1217-216481,r11.php?Lang=zh-tw",
      summary: t("news.items.1.summary"),
    },
    {
      title: t("news.items.2.title"),
      date: t("news.items.2.date"),
      href: "https://htpm.web2.ncku.edu.tw/p/406-1217-216452,r11.php?Lang=zh-tw",
      summary: t("news.items.2.summary"),
    },
    {
      title: t("news.items.3.title"),
      date: t("news.items.3.date"),
      href: "https://htpm.web2.ncku.edu.tw/p/406-1217-215600,r11.php?Lang=zh-tw",
      summary: t("news.items.3.summary"),
    },
  ];
  
  return (
    <section id="news" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            News
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {t("news.title")}
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            追蹤聯盟在研發、產業合作與教育培訓上的最新動態，掌握蛋白體微陣列技術的未來趨勢。
          </p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto" asChild>
          <a
            href="https://htpm.web2.ncku.edu.tw/p/412-1217-26725.php?Lang=zh-tw"
            target="_blank"
            rel="noreferrer"
          >
            {t("news.viewAll")}
          </a>
        </Button>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {newsItems.map((item) => (
          <article
            key={item.href}
            className="flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-card/80 p-6 shadow-sm transition-transform hover:-translate-y-1 hover:border-primary/50"
          >
            <div className="space-y-3">
              <time className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                {item.date}
              </time>
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.summary}
              </p>
            </div>
            <Button variant="link" className="mt-6 self-start px-0" asChild>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                閱讀詳情
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </Button>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const { t } = useTranslation();
  
  const contactChannels = [
    {
      label: t("contact.address"),
      value: t("contact.addressValue"),
      icon: MapPin,
    },
    {
      label: t("contact.phone"),
      value: t("contact.phoneValue"),
      icon: Phone,
      href: "tel:+88662353535,1535",
    },
    {
      label: t("contact.email"),
      value: t("contact.emailValue"),
      icon: Mail,
      href: "mailto:11402047@gs.ncku.edu.tw",
    },
    {
      label: t("contact.hours"),
      value: t("contact.hoursValue"),
      icon: CalendarDays,
    },
  ];
  
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-3xl border border-border/60 bg-card/70 px-6 py-12 shadow-xl sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Contact
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {t("contact.title")}
            </h2>
            <p className="text-base text-muted-foreground">
              {t("contact.subtitle")}
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              {contactChannels.map((channel) => (
                <div key={channel.label} className="flex items-start gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <channel.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                      {channel.label}
                    </p>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="text-base font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-foreground">
                        {channel.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="mailto:11402047@gs.ncku.edu.tw">
                  {t("contact.getInTouch")}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a
                  href="https://www.facebook.com/htpm.ncku"
                  target="_blank"
                  rel="noreferrer"
                >
                  追蹤最新消息
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">
                快速搜尋
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                直接查詢聯盟資料庫、最新研究與下載資源。搜尋結果將在新視窗開啟。
              </p>
              <form
                action="https://htpm.web2.ncku.edu.tw/app/index.php"
                method="get"
                target="_blank"
                className="mt-4 space-y-4"
              >
                <input type="hidden" name="Action" value="mobileptsearch" />
                <label className="flex flex-col gap-2 text-sm font-medium text-muted-foreground">
                  關鍵字
                  <span className="relative flex items-center">
                    <Search
                      className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground/70"
                      aria-hidden="true"
                    />
                    <input
                      name="SchKey"
                      type="search"
                      required
                      placeholder="輸入關鍵字，例如：蛋白質晶片"
                      className="w-full rounded-xl border border-border/70 bg-background px-11 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </span>
                </label>
                <Button type="submit" className="w-full gap-2">
                  啟動搜尋
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </form>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-primary/5 p-6 text-sm text-muted-foreground">
              <h3 className="text-base font-semibold text-foreground">
                合作亮點
              </h3>
              <p className="mt-2">
                透過跨領域的共同設計，確保技術成果能延伸至臨床與產業場域，創造長期價值。
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>與 20+ 產學夥伴建立持續合作網絡。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <div className="space-y-24 pb-24 pt-8 sm:pt-12">
      <HeroSection />
      <AllianceInfo />
      <NewsSection />
      <ContactSection />
    </div>
  );
}
