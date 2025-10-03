
import React from 'react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{t("about.title")}</h1>
      <p className="text-lg mb-4">
        {t("about.description1")}
      </p>
      <p className="text-lg">
        {t("about.description2")}
      </p>
    </div>
  );
};

export default About;
