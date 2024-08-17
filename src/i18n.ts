import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "ko"];

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  const MainPage = await import(`../messages/${locale}/MainPage.json`);
  const WebToolsData = await import(`../messages/${locale}/WebToolsData.json`);
  const Base64EncodeDecode = await import(`../messages/${locale}/Base64EncodeDecode.json`);
  const CountLetters = await import(`../messages/${locale}/CountLetters.json`);
  const BmiCalculator = await import(`../messages/${locale}/BmiCalculator.json`);
  const RgbHexConverter = await import(`../messages/${locale}/RgbHexConverter.json`);
  const QrCodeGenerator = await import(`../messages/${locale}/QrCodeGenerator.json`);

  return {
    messages: {
      ...MainPage,
      ...WebToolsData,
      ...Base64EncodeDecode,
      ...CountLetters,
      ...BmiCalculator,
      ...RgbHexConverter,
      ...QrCodeGenerator,
    },
  };
});
