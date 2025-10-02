import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { AppLayout } from "@/components/layout/app-layout";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <AppLayout>
      <div className="flex min-h-[60vh] items-center justify-center px-4 py-24">
        <div className="max-w-md text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">
            404 Error
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-foreground">
            找不到頁面
          </h1>
          <p className="mt-4 text-base text-muted-foreground">
            很抱歉，我們無法找到您要造訪的內容。請確認網址或返回首頁探索聯盟資訊。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button asChild>
              <a href="/">返回首頁</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/#contact">聯絡我們</a>
            </Button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default NotFound;
