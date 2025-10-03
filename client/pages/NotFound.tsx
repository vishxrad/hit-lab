import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t } = useTranslation();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      window.location.pathname,
    );
  }, []);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-24">
      <div className="max-w-md text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
          {t("notFound.error")}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
          {t("notFound.title")}
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          {t("notFound.description")}
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <a href="/">{t("notFound.backHome")}</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/#contact">{t("notFound.contactUs")}</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
