import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  FlaskConical,
  LucideIcon,
  Mail,
  MapPin,
  Microscope,
  Phone,
  PlayCircle,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from "lucide-react";

const heroStats = [
  { label: "跨域合作夥伴", value: "20+" },
  { label: "微陣列標的庫", value: "180+" },
  { label: "檢體回覆時效", value: "72 hrs" },
];

const capabilityHighlights: Array<{
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
}> = [
  {
    title: "蛋白質微陣列平台",
    description:
      "高密度蛋白質晶片結合高靈敏掃描技術，支援大量標的快速定量分析。",
    points: [
      "客製化人類與病原體蛋白質庫",
      "自動化製程與嚴謹 QC 控管",
      "跨疾病領域的應用設計",
    ],
    icon: Microscope,
  },
  {
    title: "資料科學與品質管理",
    description:
      "整合高通量數據、AI 解析與臨床專家審查，鎖定具價值之生物標誌。",
    points: [
      "雲端資料治理與追蹤",
      "專家審查會議與臨床諮詢",
      "ISO 等級流程與文件化",
    ],
    icon: ShieldCheck,
  },
  {
    title: "轉譯合作與加值服務",
    description:
      "協助產學與臨床夥伴規劃技術導入、試量產與商業模式。",
    points: [
      "跨領域顧問團隊",
      "研討會與工作坊資源",
      "試量產與驗證支持",
    ],
    icon: ClipboardCheck,
  },
  {
    title: "生醫檢體應用",
    description:
      "提供血清、血漿、組織等檢體的前處理與微量分析，確保結果可重現。",
    points: [
      "合規檢體流程與追蹤",
      "臨床實驗室合作網絡",
      "結果解讀與報告建議",
    ],
    icon: FlaskConical,
  },
];

const newsItems = [
  {
    title:
      "掌握未來趨勢：【食安所 x 不分系 跨域課程】創新技術服務的產業化與擴展",
    date: "2025-09-03",
    href: "https://htpm.web2.ncku.edu.tw/p/450-1217-216731,c0.php?Lang=zh-tw",
    summary:
      "探索如何將研究成果轉化為具市場規模的技術服務，課程涵蓋平台設計與商業化策略。",
  },
  {
    title: "蛋白質微陣列技術｜高通量蛋白質分析與應用領先解決方案",
    date: "2025-08-08",
    href: "https://htpm.web2.ncku.edu.tw/p/406-1217-216481,r11.php?Lang=zh-tw",
    summary:
      "介紹高通量蛋白質分析平台於精準醫療的多元應用，包括標誌物探索與診斷開發。",
  },
  {
    title: "回顧【2025 抗體藥物暨第 20 屆前瞻生醫新知研討會】",
    date: "2025-08-06",
    href: "https://htpm.web2.ncku.edu.tw/p/406-1217-216452,r11.php?Lang=zh-tw",
    summary:
      "分享聯盟於研討會中的最新成果，展示蛋白體微陣列在抗體藥物開發上的突破。",
  },
  {
    title: "高通量蛋白質微陣列晶片技術與生醫產業服務聯盟工作坊",
    date: "2025-04-09",
    href: "https://htpm.web2.ncku.edu.tw/p/406-1217-215600,r11.php?Lang=zh-tw",
    summary:
      "聚焦微陣列晶片製程、品管以���臨床研究案例，協助夥伴快速掌握實務。",
  },
];

const membershipHighlights = [
  {
    title: "聯盟會員方案",
    description:
      "專為產業與學研夥伴設計，提供技術諮詢、先行試用與年度專題研究。",
    benefits: [
      "定期技術簡報與成果分享",
      "專屬顧問協助規劃專案",
      "會員限定資料庫與研討會席次",
    ],
    icon: Users,
  },
  {
    title: "檢體收件諮詢",
    description:
      "提供全流程檢體導入支援，含採集規格、冷鏈運送與資料登錄。",
    benefits: [
      "專人線上諮詢與預約",
      "標準化檢體登錄文件",
      "結果解讀與後續建議",
    ],
    icon: ClipboardCheck,
  },
];

const supportHighlights = [
  {
    label: "技術評估",
    detail: "4 週內完成可行性評估報告",
  },
  {
    label: "專案啟動",
    detail: "設計審查會議同步臨床與產業需求",
  },
  {
    label: "資料回傳",
    detail: "提供原始數據、統計分析與專家建議",
  },
];

const contactChannels = [
  {
    label: "地址",
    value: "701 台南市東區大學路 1 號 生醫卓群大樓 9 樓",
    icon: MapPin,
  },
  {
    label: "電話",
    value: "+886-6-2353535 ext.1535",
    icon: Phone,
    href: "tel:+88662353535,1535",
  },
  {
    label: "Email",
    value: "11402047@gs.ncku.edu.tw",
    icon: Mail,
    href: "mailto:11402047@gs.ncku.edu.tw",
  },
  {
    label: "諮詢時段",
    value: "週一至週五 09:00-17:00 (GMT+8)",
    icon: CalendarDays,
  },
];

function HeroSection() {
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
            HIGH-THROUGHPUT PROTEOMICS
          </span>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            ���越蛋白體微陣列平台，驅動精準健康創新。
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            成功大學高通量蛋白質微陣列技術與生醫產業服務聯盟，整合平台研發、檢測服務與臨床應用，
            為產學合作夥伴提供高效率、高靈敏的蛋白體分析與轉譯支援。
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="shadow-lg shadow-primary/10" asChild>
              <a href="#capabilities">
                探索核心技術
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
                查看最新動態
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
        <figure className="relative isolate overflow-hidden rounded-3xl border border-primary/15 bg-card/70 p-6 shadow-xl shadow-primary/10">
          <img
            src="https://htpm.web2.ncku.edu.tw/var/file/217/1217/randimg/mobileadv_2064_171142_38153.png"
            alt="蛋白體微陣列聯盟在成大高通量生物感測實驗室"
            className="h-full w-full rounded-2xl object-cover"
            loading="lazy"
          />
          <figcaption className="mt-4 flex items-center justify-between rounded-2xl bg-background/90 px-4 py-3 text-sm text-muted-foreground shadow">
            <div>
              <p className="font-medium text-foreground">高通量生物感測實驗室</p>
              <p>專業團隊提供研發到臨床的全流程支援</p>
            </div>
            <TrendingUp className="h-5 w-5 text-primary" aria-hidden="true" />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section id="capabilities" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-3xl border border-border/70 bg-card/60 px-6 py-12 shadow-lg shadow-primary/5 sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Technologies
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                核心技術與整合服務
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                從晶片設計、檢體前處理、影像擷取到資料詮釋，我們以模組化與標準化流程，協助夥伴快速導入蛋白體微陣列。每個模組皆可依據專案需求彈性調整，串接成一條完整的解決方案。
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {capabilityHighlights.map((item) => (
                <article
                  key={item.title}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm transition-colors hover:border-primary/40"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-muted-foreground">
              <p>
                透過全程品質追蹤、檢體鏈結管理與雙語專案窗口，HTPM Alliance 確保成果可被臨床及產業快速採納，降低導入成本並縮短驗證時程。
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-border/60 bg-background/80 p-4 shadow-lg">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-border/40 bg-black">
                <iframe
                  src="https://www.youtube.com/embed/2fqrxbkJwL0?si=CZVuARKDj63ZDbSc"
                  title="蛋白體微陣列晶片介紹"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">蛋白體微陣列晶片介紹</p>
                <p>
                  影片帶您了解晶片架構、製程優勢與在生醫產業的應用案例，適合首次接觸或準備導入的團隊。
                </p>
              </div>
              <Button variant="ghost" className="mt-4 gap-2 text-sm text-primary" asChild>
                <a href="https://htpm.web2.ncku.edu.tw/p/450-1217-26722.php?Lang=zh-tw" target="_blank" rel="noreferrer">
                  深入了解核心技術
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
            </div>
            <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 text-sm text-muted-foreground">
              <h3 className="text-base font-semibold text-foreground">策略夥伴資源</h3>
              <p className="mt-2">
                與國內外臨床中心、技術廠商與監管單位緊密合作，提供從探索到驗證、上市的全方位支援。
              </p>
              <div className="mt-4 flex items-center gap-4">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
                <span>定期跨域諮詢會議，建立共同語言與協作節奏。</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NewsSection() {
  return (
    <section id="news" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            News
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            最新消息
          </h2>
          <p className="mt-2 max-w-2xl text-base text-muted-foreground">
            追蹤聯盟在研發、產業合作與教育培訓上的最新動態，掌握蛋白體微陣列技術的未來趨勢。
          </p>
        </div>
        <Button variant="outline" className="w-full sm:w-auto" asChild>
          <a href="https://htpm.web2.ncku.edu.tw/p/412-1217-26725.php?Lang=zh-tw" target="_blank" rel="noreferrer">
            前往全部消息
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
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
            </div>
            <Button variant="link" className="mt-6 self-start px-0" asChild>
              <a href={item.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
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

function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-3xl border border-border/60 bg-card/70 px-6 py-12 shadow-lg sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Membership & Services
              </span>
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                會員招募與服務方案
              </h2>
              <p className="text-base text-muted-foreground">
                聯盟為不同階段的夥伴提供彈性方案，從需求訪談、技術導入到上市前驗證，皆有專責團隊協助。
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {membershipHighlights.map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-background/80 p-6 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/15 text-primary">
                      <item.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
                    {item.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary/60" aria-hidden="true" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
              <p>
                完成線上諮詢後，團隊將於 2 個工作日內回覆，協助規劃入會與服務流程。
              </p>
              <Button size="sm" variant="outline" asChild>
                <a href="https://htpm.web2.ncku.edu.tw/p/450-1217-26908,c1.php?Lang=zh-tw" target="_blank" rel="noreferrer">
                  下載服務資料
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-xl font-semibold text-foreground">導入步驟</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                從初次諮詢到專案啟動，聯盟提供透明節點與明確交付物。
              </p>
              <ol className="mt-6 space-y-4 text-sm text-muted-foreground">
                {supportHighlights.map((item, index) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-medium text-foreground">{item.label}</p>
                      <p>{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="rounded-2xl border border-border/60 bg-background/90 p-6 text-sm text-muted-foreground">
              <h3 className="text-base font-semibold text-foreground">常見服務類別</h3>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {[
                  "臨床前與臨床檢測",
                  "生物標誌探索",
                  "抗體與藥物開發",
                  "食品安全與檢驗",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="rounded-3xl border border-border/60 bg-card/70 px-6 py-12 shadow-xl sm:px-10 lg:px-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr,0.9fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Contact
            </span>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              與聯盟聯繫，啟動合作
            </h2>
            <p className="text-base text-muted-foreground">
              不論您是準備導入蛋白體微陣列技術、探索生物標誌或規劃臨床試驗，
              我們的專業團隊將與您���同設計最合適的合作方案。
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
                      <p className="text-base font-medium text-foreground">{channel.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="mailto:11402047@gs.ncku.edu.tw">
                  立即聯繫專人
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.facebook.com/htpm.ncku" target="_blank" rel="noreferrer">
                  追蹤最新消息
                </a>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground">快速搜尋</h3>
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
                    <Search className="pointer-events-none absolute left-3 h-4 w-4 text-muted-foreground/70" aria-hidden="true" />
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
              <h3 className="text-base font-semibold text-foreground">合作亮點</h3>
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
    <AppLayout>
      <div className="space-y-24 pb-24 pt-8 sm:pt-12">
        <HeroSection />
        <CapabilitiesSection />
        <NewsSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </AppLayout>
  );
}
