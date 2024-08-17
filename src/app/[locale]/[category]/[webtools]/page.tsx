import { categoryKeys, toolKeys } from "@/utils/webToolKeys";
import Base64Component from "@/webtoolcomponent/base64/base64Component";
import BmiCalculatorComponent from "@/webtoolcomponent/bmi/bmiCalculatorComponent";
import CountLettersComponent from "@/webtoolcomponent/countletters/countLettersComponent";
import QRCodeComponent from "@/webtoolcomponent/qrCodeGenerator/qrCodeComponent";
import RgbHexComponent from "@/webtoolcomponent/rbgHexConverter/rgbHexConvertComponent";
import SyntaxHighlighterComponent from "@/webtoolcomponent/syntaxHighlighter/syntaxHighlighterComponent";
import { notFound } from "next/navigation";

interface Params {
  params: {
    locale: string;
    category: (typeof categoryKeys)[number];
    webtools: (typeof toolKeys)[number]["name"];
  };
}

export default function WebToolPage({ params }: Params): React.JSX.Element {
  const { locale, category, webtools } = params;

  const isValidPath = (category: string, webtools: string): boolean => {
    return toolKeys.some((tool) => tool.category === category && tool.name === webtools);
  };

  const validPath = isValidPath(category, webtools);
  if (!validPath) {
    notFound();
  }

  return (
    <main className="w-full h-full min-h-screen bg-background-color">
      <div className="p-4 text-text-color flex flex-col justify-center ">
        <div>
          {webtools === "base64EncodeDecode" && <Base64Component />}
          {webtools === "countLetters" && <CountLettersComponent />}
          {webtools === "bmiCalculator" && <BmiCalculatorComponent locale={locale} />}
          {webtools === "rgbHexConverter" && <RgbHexComponent />}
          {webtools === "qrCodeGenerator" && <QRCodeComponent />}
          {webtools === "syntaxHighlighter" && <SyntaxHighlighterComponent />}
        </div>
      </div>
    </main>
  );
}
