import { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({
  params,
}: {
  params: { locale: string; category: string; webtools: string };
}): Promise<Metadata> => {
  const t = await getTranslations(params.webtools);

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    metadataBase: new URL("https://webtoolstack.com/"),
    openGraph: {
      type: "website",
      url: `https://webtoolstack.com/${params.locale}/${params.category}/${params.webtools}`,
      title: t("meta.title"),
      description: t("meta.description"),
      siteName: t("meta.title"),
    },
  };
};

export default function WebtoolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
