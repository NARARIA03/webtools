import { useTranslations } from "next-intl";

export default function TextComponent() {
  const t = useTranslations("reactionTimeTestText");

  return (
    <div className="text-text-color">
      <h2 className="text-xl my-2 mt-6">{t("howItWorks.title")}</h2>
      <p className="text-base mb-1">{t("howItWorks.description")}</p>
      <p className="text-sm mb-1">1. {t("howItWorks.steps.1")}</p>
      <p className="text-sm mb-1">2. {t("howItWorks.steps.2")}</p>
      <p className="text-sm mb-1">3. {t("howItWorks.steps.3")}</p>
      <p className="text-sm mb-1">4. {t("howItWorks.steps.4")}</p>

      <h2 className="text-xl my-2 mt-6">{t("ageAndReactionTime.title")}</h2>
      <p className="text-base mb-1">{t("ageAndReactionTime.description")}</p>
      <p className="text-sm mb-1">{t("ageAndReactionTime.ageGroups.1")}</p>
      <p className="text-sm mb-1">{t("ageAndReactionTime.ageGroups.2")}</p>
      <p className="text-sm mb-1">{t("ageAndReactionTime.ageGroups.3")}</p>
      <p className="text-sm mb-1">{t("ageAndReactionTime.ageGroups.4")}</p>
      <p className="text-sm mb-1">{t("ageAndReactionTime.ageGroups.5")}</p>

      <h2 className="text-xl my-2 mt-6">{t("interpretResults.title")}</h2>
      <p className="text-base mb-1">{t("interpretResults.description")}</p>
      <p className="text-sm mb-1">{t("interpretResults.percentiles.1")}</p>
      <p className="text-sm mb-1">{t("interpretResults.percentiles.2")}</p>
      <p className="text-sm mb-1">{t("interpretResults.percentiles.3")}</p>
      <p className="text-sm mb-1">{t("interpretResults.percentiles.4")}</p>
      <p className="text-sm mb-1">{t("interpretResults.percentiles.5")}</p>

      <h2 className="text-xl my-2 mt-6">{t("tips.title")}</h2>
      <p className="text-base mb-1">{t("tips.description")}</p>
      <p className="text-sm mb-1">1. {t("tips.tipsList.1")}</p>
      <p className="text-sm mb-1">2. {t("tips.tipsList.2")}</p>
      <p className="text-sm mb-1">3. {t("tips.tipsList.3")}</p>
      <p className="text-sm mb-1">4. {t("tips.tipsList.4")}</p>
      <p className="text-sm mb-1">5. {t("tips.tipsList.5")}</p>

      <h2 className="text-xl my-2 mt-6">{t("usageNotes.title")}</h2>
      <p className="text-sm mb-1">1. {t("usageNotes.notes.1")}</p>
      <p className="text-sm mb-1">2. {t("usageNotes.notes.2")}</p>
      <p className="text-sm mb-1">3. {t("usageNotes.notes.3")}</p>
      <p className="text-sm mb-1">4. {t("usageNotes.notes.4")}</p>

      <h2 className="text-xl my-2 mt-6">{t("funFacts.title")}</h2>
      <p className="text-sm mb-1">1. {t("funFacts.facts.1")}</p>
      <p className="text-sm mb-1">2. {t("funFacts.facts.2")}</p>
      <p className="text-sm mb-1">3. {t("funFacts.facts.3")}</p>
      <p className="text-sm mb-1">4. {t("funFacts.facts.4")}</p>
    </div>
  );
}
