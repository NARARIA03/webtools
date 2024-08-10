import { useTranslations } from "next-intl";

export default function TextComponent() {
  const t = useTranslations("bmiCalculatorText");
  return (
    <div className="text-text-color">
      <h2 className="text-xl my-2 mt-6">{t("overview.title")}</h2>
      <p className="text-base mb-1">{t("overview.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("overviewBmi.title")}</h2>
      <p className="text-base mb-1">{t("overviewBmi.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("calculation.title")}</h2>
      <p className="text-base mb-1">{t("calculation.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("categories.title")}</h2>
      <p className="text-sm mb-1">{t("categories.steps.1")}</p>
      <p className="text-sm mb-1">{t("categories.steps.2")}</p>
      <p className="text-sm mb-1">{t("categories.steps.3")}</p>
      <p className="text-sm mb-1">{t("categories.steps.4")}</p>
      <p className="text-sm mb-1">{t("categories.steps.5")}</p>
      <p className="text-sm mb-1">{t("categories.steps.6")}</p>

      <h2 className="text-xl my-2 mt-6">{t("usageInstructions.title")}</h2>
      <p className="text-sm mb-1">1. {t("usageInstructions.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("usageInstructions.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("usageInstructions.steps.3")}</p>

      <h2 className="text-xl my-2 mt-6">{t("advantages.title")}</h2>
      <p className="text-sm mb-1">{t("advantages.steps.1")}</p>
      <p className="text-sm mb-1">{t("advantages.steps.2")}</p>
      <p className="text-sm mb-1">{t("advantages.steps.3")}</p>

      <h2 className="text-xl my-2 mt-6">{t("limitations.title")}</h2>
      <p className="text-sm mb-1">{t("limitations.steps.1")}</p>
      <p className="text-sm mb-1">{t("limitations.steps.2")}</p>
      <p className="text-sm mb-1">{t("limitations.steps.3")}</p>

      <h2 className="text-xl my-2 mt-6">{t("alternativeMetrics.title")}</h2>
      <p className="text-sm mb-1">{t("alternativeMetrics.steps.1")}</p>
      <p className="text-sm mb-1">{t("alternativeMetrics.steps.2")}</p>
      <p className="text-sm mb-1">{t("alternativeMetrics.steps.3")}</p>
      <p className="text-sm mb-1">{t("alternativeMetrics.steps.4")}</p>

      <h2 className="text-xl my-2 mt-6">{t("security.title")}</h2>
      <p className="text-base mb-1">{t("security.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("freeUsage.title")}</h2>
      <p className="text-base mb-1">{t("freeUsage.description")}</p>
    </div>
  );
}
