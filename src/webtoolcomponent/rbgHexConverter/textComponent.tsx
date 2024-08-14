import { useTranslations } from "next-intl";

export default function TextComponent() {
  const t = useTranslations("rgbHexConverterText");

  return (
    <div className="text-text-color">
      <h2 className="text-xl my-2 mt-6">{t("rgbToHex.title")}</h2>
      <p className="text-base mb-1">{t("rgbToHex.description")}</p>
      <p className="text-sm mb-1">1. {t("rgbToHex.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("rgbToHex.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("rgbToHex.steps.3")}</p>

      <h2 className="text-xl my-2 mt-6">{t("hexToRgb.title")}</h2>
      <p className="text-base mb-1">{t("hexToRgb.description")}</p>
      <p className="text-sm mb-1">1. {t("hexToRgb.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("hexToRgb.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("hexToRgb.steps.3")}</p>

      <h2 className="text-xl my-2 mt-6">{t("usageInstructions.title")}</h2>
      <p className="text-sm mb-1">1. {t("usageInstructions.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("usageInstructions.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("usageInstructions.steps.3")}</p>
      <p className="text-sm mb-1">4. {t("usageInstructions.steps.4")}</p>

      <h2 className="text-xl my-2 mt-6">{t("security.title")}</h2>
      <p className="text-base mb-1">{t("security.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("freeUsage.title")}</h2>
      <p className="text-base mb-1">{t("freeUsage.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("example.title")}</h2>
      <p className="text-base mb-1">{t("example.description")}</p>
    </div>
  );
}
