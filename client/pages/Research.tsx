
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ClipboardCheck,
  FlaskConical,
  LucideIcon,
  Microscope,
  ShieldCheck,
  Users,
} from "lucide-react";

const Research: React.FC = () => {
  const { t } = useTranslation();
  
  const capabilityHighlights: Array<{
    title: string;
    description: string;
    points: string[];
    icon: LucideIcon;
  }> = [
    {
      title: t("capabilities.platform.title"),
      description: t("capabilities.platform.description"),
      points: [
        t("capabilities.platform.points.0"),
        t("capabilities.platform.points.1"),
        t("capabilities.platform.points.2"),
      ],
      icon: Microscope,
    },
    {
      title: t("capabilities.dataScience.title"),
      description: t("capabilities.dataScience.description"),
      points: [
        t("capabilities.dataScience.points.0"),
        t("capabilities.dataScience.points.1"),
        t("capabilities.dataScience.points.2"),
      ],
      icon: ShieldCheck,
    },
    {
      title: t("capabilities.translation.title"),
      description: t("capabilities.translation.description"),
      points: [
        t("capabilities.translation.points.0"),
        t("capabilities.translation.points.1"),
        t("capabilities.translation.points.2"),
      ],
      icon: ClipboardCheck,
    },
    {
      title: t("capabilities.biosamples.title"),
      description: t("capabilities.biosamples.description"),
      points: [
        t("capabilities.biosamples.points.0"),
        t("capabilities.biosamples.points.1"),
        t("capabilities.biosamples.points.2"),
      ],
      icon: FlaskConical,
    },
  ];
  
  return (
    <div className="space-y-16 pb-24 pt-8 sm:pt-12">
      <section id="capabilities" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border/70 bg-card/60 px-6 py-12 shadow-lg shadow-primary/5 sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Technologies
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {t("capabilities.title")}
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {t("capabilities.subtitle")}
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
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <span
                            className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/60"
                            aria-hidden="true"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-muted-foreground">
                <p>
                  透過全程品質追蹤、檢體鏈結管理與雙語專案窗口，HTPM Alliance
                  確保成果可被臨床及產業快速採納，降低導入成本並縮短驗證時程。
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
                  <p className="font-medium text-foreground">
                    蛋白體微陣列晶片介紹
                  </p>
                  <p>
                    影片帶您了解晶片架構、製程優勢與在生醫產業的應用案例，適合首次接觸或準備導入的團隊。
                  </p>
                </div>
                <Button
                  variant="ghost"
                  className="mt-4 gap-2 text-sm text-primary"
                  asChild
                >
                  <a
                    href="https://htpm.web2.ncku.edu.tw/p/450-1217-26722.php?Lang=zh-tw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    深入了解核心技術
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
              <div className="rounded-2xl border border-accent/30 bg-accent/10 p-6 text-sm text-muted-foreground">
                <h3 className="text-base font-semibold text-foreground">
                  策略夥伴資源
                </h3>
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
    </div>
  );
};

export default Research;
