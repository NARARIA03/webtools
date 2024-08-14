import { useTranslations } from "next-intl";

export default function TextComponent() {
  const t = useTranslations("qrCodeGeneratorText");

  return (
    <div className="text-text-color">
      <h2 className="text-xl my-2 mt-6">{t("features.title")}</h2>
      <p className="text-sm mb-1">{t("features.steps.1")}</p>
      <p className="text-sm mb-1">{t("features.steps.2")}</p>
      <p className="text-sm mb-1">{t("features.steps.3")}</p>
      <p className="text-sm mb-1">{t("features.steps.4")}</p>
      <p className="text-sm mb-1">{t("features.steps.5")}</p>

      <h2 className="text-xl my-2 mt-6">{t("usageInstructions.title")}</h2>
      <p className="text-sm mb-1">1. {t("usageInstructions.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("usageInstructions.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("usageInstructions.steps.3")}</p>
      <p className="text-sm mb-1">4. {t("usageInstructions.steps.4")}</p>

      <h2 className="text-xl my-2 mt-6">{t("useCases.title")}</h2>
      <p className="text-sm mb-1">{t("useCases.steps.1")}</p>
      <p className="text-sm mb-1">{t("useCases.steps.2")}</p>
      <p className="text-sm mb-1">{t("useCases.steps.3")}</p>
      <p className="text-sm mb-1">{t("useCases.steps.4")}</p>
      <p className="text-sm mb-1">{t("useCases.steps.5")}</p>
      <p className="text-sm mb-1">{t("useCases.steps.6")}</p>

      <h2 className="text-xl my-2 mt-6">{t("freeUsage.title")}</h2>
      <p className="text-base mb-1">{t("freeUsage.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("tips.title")}</h2>
      <p className="text-sm mb-1">{t("tips.steps.1")}</p>
      <p className="text-sm mb-1">{t("tips.steps.2")}</p>
      <p className="text-sm mb-1">{t("tips.steps.3")}</p>
      <p className="text-sm mb-1">{t("tips.steps.4")}</p>

      <h2 className="text-xl my-2 mt-6">{t("security.title")}</h2>
      <p className="text-base mb-1">{t("security.description")}</p>
    </div>
  );
}
