
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import {
  ClipboardCheck,
  LucideIcon,
  Users,
} from "lucide-react";

const Members: React.FC = () => {
  const { t } = useTranslation();
  
  const membershipHighlights: Array<{
    title: string;
    description: string;
    benefits: string[];
    icon: LucideIcon;
  }> = [
    {
      title: t("services.membership.title"),
      description: t("services.membership.description"),
      benefits: [
        t("services.membership.benefits.0"),
        t("services.membership.benefits.1"),
        t("services.membership.benefits.2"),
      ],
      icon: Users,
    },
    {
      title: t("services.consultation.title"),
      description: t("services.consultation.description"),
      benefits: [
        t("services.consultation.benefits.0"),
        t("services.consultation.benefits.1"),
        t("services.consultation.benefits.2"),
      ],
      icon: ClipboardCheck,
    },
  ];

  const supportHighlights = [
    {
      label: t("services.support.assessment"),
      detail: t("services.support.assessmentDetail"),
    },
    {
      label: t("services.support.initiation"),
      detail: t("services.support.initiationDetail"),
    },
    {
      label: t("services.support.delivery"),
      detail: t("services.support.deliveryDetail"),
    },
  ];
  
  return (
    <div className="space-y-16 pb-24 pt-8 sm:pt-12">
      <section id="services" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border/60 bg-card/70 px-6 py-12 shadow-lg sm:px-10 lg:px-14 lg:py-16">
          <div className="grid gap-12 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Membership & Services
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  {t("services.title")}
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
                        <h3 className="text-lg font-semibold text-foreground">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground/90">
                      {item.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <span
                            className="mt-1 block h-1.5 w-1.5 rounded-full bg-primary/60"
                            aria-hidden="true"
                          />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                <p>
                  完成線上諮詢後，團隊將於 2
                  個工作日內回覆，協助規劃入會與服務流程。
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href="https://htpm.web2.ncku.edu.tw/p/450-1217-26908,c1.php?Lang=zh-tw"
                    target="_blank"
                    rel="noreferrer"
                  >
                    下載服務資料
                  </a>
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  導入步驟
                </h3>
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
                        <p className="font-medium text-foreground">
                          {item.label}
                        </p>
                        <p>{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/90 p-6 text-sm text-muted-foreground">
                <h3 className="text-base font-semibold text-foreground">
                  常見服務類別
                </h3>
                <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                  {[
                    "臨床前與臨床檢測",
                    "生物標誌探索",
                    "抗體與藥物開發",
                    "食品安全與檢驗",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        className="h-1.5 w-1.5 rounded-full bg-primary/60"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Members;
