import { Metadata } from "next";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");
  return <h1 className="text-center">{t("title")}</h1>;
}
