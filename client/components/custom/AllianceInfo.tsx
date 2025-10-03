
import { useTranslation } from "react-i18next";

export function AllianceInfo() {
  const { t, i18n } = useTranslation();
  const isChinese = i18n.language === "zh";

  return (
    <section id="alliance-info" className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="rounded-3xl border border-border/60 bg-card/70 px-6 py-12 shadow-lg sm:px-10 lg:px-14 lg:py-16">
            <div>
                <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    {t("allianceInfo.title")}
                </h2>
            </div>
            <div className="mt-8">
                {isChinese ? (
                    <ul className="space-y-4">
                        <li className="text-lg text-muted-foreground">{t("allianceInfo.items.0")}</li>
                        <li className="text-lg text-muted-foreground">{t("allianceInfo.items.1")}</li>
                        <li className="text-lg text-muted-foreground">{t("allianceInfo.items.2")}</li>
                        <li className="text-lg text-muted-foreground">{t("allianceInfo.items.3")}</li>
                        <li className="text-lg text-muted-foreground">{t("allianceInfo.items.4")}</li>
                    </ul>
                ) : (
                    <div className="space-y-4 text-lg text-muted-foreground">
                        <p>{t("allianceInfo.summary")}</p>
                        <p>{t("allianceInfo.mission")}</p>
                        <h3 className="text-2xl font-semibold text-foreground pt-4">{t("allianceInfo.objectivesTitle")}</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>{t("allianceInfo.objectives.0")}</li>
                            <li>{t("allianceInfo.objectives.1")}</li>
                            <li>{t("allianceInfo.objectives.2")}</li>
                            <li>{t("allianceInfo.objectives.3")}</li>
                            <li>{t("allianceInfo.objectives.4")}</li>
                            <li>{t("allianceInfo.objectives.5")}</li>
                            <li>{t("allianceInfo.objectives.6")}</li>
                            <li>{t("allianceInfo.objectives.7")}</li>
                            <li>{t("allianceInfo.objectives.8")}</li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    </section>
  );
}
