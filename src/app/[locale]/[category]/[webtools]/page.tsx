import { toolKeys } from "@/utils/webToolKeys";
import Base64Component from "@/webtoolcomponent/base64/base64Component";
import BmiCalculatorComponent from "@/webtoolcomponent/bmi/bmiCalculatorComponent";
import CountLettersComponent from "@/webtoolcomponent/countletters/countLettersComponent";
import { notFound } from "next/navigation";

export default function WebToolPage({ params }: { params: { locale: string; category: string; webtools: string } }): React.JSX.Element {
  const { locale, category, webtools } = params;
  const toolNameList = toolKeys.map((value) => value.name);

  if (!toolNameList.includes(webtools)) {
    notFound();
  }

  return (
    <main className="w-full h-full min-h-screen bg-background-color">
      <div className="p-4 text-text-color flex flex-col justify-center ">
        <div>
          {webtools === "base64EncodeDecode" && <Base64Component />}
          {webtools === "countLetters" && <CountLettersComponent />}
          {webtools === "bmiCalculator" && <BmiCalculatorComponent locale={locale} />}
        </div>
      </div>
    </main>
  );
}
