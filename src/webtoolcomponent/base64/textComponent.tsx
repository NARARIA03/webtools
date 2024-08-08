import { useTranslations } from "next-intl";

export default function TextComponent() {
  const t = useTranslations("base64EncodeDecodeText");
  return (
    <div className="text-text-color">
      <h2 className="text-xl my-2 mt-6">{t("base64Encoding.title")}</h2>
      <p className="text-base mb-1">{t("base64Encoding.description")}</p>
      <p className="text-sm mb-1">1. {t("base64Encoding.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("base64Encoding.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("base64Encoding.steps.3")}</p>

      <h2 className="text-xl my-2 mt-6">{t("base64Decoding.title")}</h2>
      <p className="text-base mb-1">{t("base64Decoding.description")}</p>
      <p className="text-sm mb-1">1. {t("base64Decoding.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("base64Decoding.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("base64Decoding.steps.3")}</p>

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
