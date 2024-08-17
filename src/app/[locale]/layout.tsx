import { NextIntlClientProvider } from "next-intl";
import { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import GoogleAdsense from "../adsenseComp";
import { getMessages, getTranslations } from "next-intl/server";
import "../globals.css";
import NavBar from "@/components/navBar";
import CategoryBar from "@/components/categoryBar";
import Footer from "@/components/footer";

export const generateMetadata = async ({ params }: { params: { locale: string } }): Promise<Metadata> => {
  const t = await getTranslations("MainPage");

  return {
    title: t("meta.title"),
    description: t("meta.description"),
    metadataBase: new URL("https://webtoolstack.com/"),
    verification: {
      other: {
        "naver-site-verification": [process.env.NEXT_PUBLIC_NAVERID || ""],
      },
    },
    openGraph: {
      type: "website",
      url: `https://webtoolstack.com/${params.locale}`,
      title: t("meta.title"),
      description: t("meta.description"),
      siteName: t("meta.title"),
    },
  };
};

export default async function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  // 런타임 검증으로 환경 변수 타입 내로잉
  if (!process.env.NEXT_PUBLIC_GAID || !process.env.NEXT_PUBLIC_PID) {
    throw new Error("Environment variables NEXT_PUBLIC_GAID and NEXT_PUBLIC_PID must be set.");
  }

  return (
    <html lang={locale}>
      <body>
        <NavBar />
        <div className="pt-20 pb-4 bg-primary-color">
          <CategoryBar locale={locale} />
        </div>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
        <Footer />
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GAID} />
      <GoogleAdsense pId={process.env.NEXT_PUBLIC_PID} />
    </html>
  );
}
