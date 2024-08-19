import { useTranslations } from "next-intl";

export default function TextComponent() {
  const t = useTranslations("syntaxHighlighterText");

  return (
    <div className="text-text-color">
      <h2 className="text-xl my-2 mt-6">{t("overview.title")}</h2>
      <p className="text-base mb-1">{t("overview.description")}</p>

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

      <h2 className="text-xl my-2 mt-6">{t("benefits.title")}</h2>
      <p className="text-sm mb-1"> {t("benefits.steps.1")}</p>
      <p className="text-sm mb-1"> {t("benefits.steps.2")}</p>
      <p className="text-sm mb-1"> {t("benefits.steps.3")}</p>
      <p className="text-sm mb-1"> {t("benefits.steps.4")}</p>

      <h2 className="text-xl my-2 mt-6">{t("security.title")}</h2>
      <p className="text-base mb-1">{t("security.description")}</p>
    </div>
  );
}
