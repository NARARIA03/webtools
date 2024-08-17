import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({ params }: { params: { locale: string; category: string } }): Promise<Metadata> => {
  const t = await getTranslations("MainPage");

  return {
    title: t(`categories.${params.category}.meta.title`),
    description: t(`categories.${params.category}.meta.description`),
    metadataBase: new URL("https://webtoolstack.com/"),
    openGraph: {
      type: "website",
      url: `https://webtoolstack.com/${params.locale}/${params.category}`,
      title: t(`categories.${params.category}.meta.title`),
      description: t(`categories.${params.category}.meta.description`),
      siteName: t(`categories.${params.category}.meta.title`),
    },
  };
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
