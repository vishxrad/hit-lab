
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Team: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t("teamPage.title")}</h1>
        
        {/* Team Member Card */}
        <Card className="overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
            <CardTitle className="text-2xl">{t("teamPage.members")}</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Profile Image */}
              <div className="md:col-span-1">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/C4E03AQHkF4JUFnSw3g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1516646447791?e=1762387200&v=beta&t=8_cv4RzehyQ311rcKMKX7xrWppMjFulbe-ltSoq3R8Q"
                    alt="Dr. Chien-Sheng (Jason) Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Profile Information */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h2 className="text-3xl font-bold mb-2">
                    {t("teamPage.member.name")}
                  </h2>
                  <p className="text-xl text-muted-foreground mb-3">
                    {t("teamPage.member.title")}
                  </p>
                  <p className="text-lg text-primary font-medium mb-4">
                    {t("teamPage.member.affiliation")}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t("teamPage.member.positionLabel")}</h3>
                    <p className="text-muted-foreground">{t("teamPage.member.position")}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t("teamPage.member.departmentLabel")}</h3>
                    <p className="text-muted-foreground">{t("teamPage.member.department")}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t("teamPage.member.locationLabel")}</h3>
                    <p className="text-muted-foreground">{t("teamPage.member.location")}</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg mb-2">{t("teamPage.member.researchLabel")}</h3>
                    <p className="text-muted-foreground mb-3">{t("teamPage.member.researchDescription")}</p>
                    <div className="flex flex-wrap gap-2">
                      {(t("teamPage.member.expertise", { returnObjects: true }) as string[]).map((skill: string, index: number) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <h3 className="font-semibold text-lg mb-2">{t("teamPage.member.publicationsLabel")}</h3>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div className="bg-primary/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary">77</div>
                        <div className="text-sm text-muted-foreground">{t("teamPage.member.publicationsCount")}</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary">24.9k</div>
                        <div className="text-sm text-muted-foreground">{t("teamPage.member.readsCount")}</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary">1.6k</div>
                        <div className="text-sm text-muted-foreground">{t("teamPage.member.citationsCount")}</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a 
                      href="https://www.researchgate.net/profile/Chien-Sheng-jason-Chen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline"
                    >
                      {t("teamPage.member.viewProfile")}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Team;
