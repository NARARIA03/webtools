import { useTranslations } from "next-intl";

export default function TextComponent(): React.JSX.Element {
  const t = useTranslations("countLettersText");

  return (
    <div className="text-text-color">
      <h2 className="text-xl my-2 mt-6">{t("overview.title")}</h2>
      <p className="text-base mb-1">{t("overview.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("features.title")}</h2>
      <p className="text-sm mb-1">1. {t("features.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("features.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("features.steps.3")}</p>

      <h2 className="text-xl my-2 mt-6">{t("usageInstructions.title")}</h2>
      <p className="text-sm mb-1">1. {t("usageInstructions.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("usageInstructions.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("usageInstructions.steps.3")}</p>

      <h2 className="text-xl my-2 mt-6">{t("benefits.title")}</h2>
      <p className="text-sm mb-1">1. {t("benefits.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("benefits.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("benefits.steps.3")}</p>

      <h2 className="text-xl my-2 mt-6">{t("security.title")}</h2>
      <p className="text-base mb-1">{t("security.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("freeUsage.title")}</h2>
      <p className="text-base mb-1">{t("freeUsage.description")}</p>

      <h2 className="text-xl my-2 mt-6">{t("example.title")}</h2>
      <p className="text-base mb-1">{t("example.description")}</p>
    </div>
  );
}
