import { useTranslations } from "next-intl";
import Base64Component from "./base64Component";

export default function Base64EncodeDecodePage() {
  const t = useTranslations("Base64EncodeDecodePage");

  return (
    <div className="w-full h-full">
      <div className="p-4 text-text-color bg-background-color flex flex-col justify-center ">
        <div className="w-full max-w-4xl mt-2 mx-auto">
          <h2 className="text-lg">{t("title")}</h2>
        </div>
        <div>
          <Base64Component />
        </div>
      </div>
    </div>
  );
}
