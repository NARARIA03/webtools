import { useLocale, useTranslations } from "next-intl";
import { toolKeys } from "@/utils/webToolKeys";
import RenderWebToolList from "@/components/renderWebToolList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "WebTools - Utility Hub",
  description:
    "Discover a comprehensive collection of web and PC utilities designed to enhance your productivity and streamline your tasks.",
};

export default function MainPage() {
  const t = useTranslations("MainPage");
  const locale = useLocale();
  const toolKeysName = toolKeys.map((value) => value.name);

  return (
    <div className="w-full h-full">
      <div className="p-4 text-text-color bg-background-color flex flex-col justify-center ">
        <div className="w-full max-w-4xl mt-2 mx-auto">
          <h2 className="text-lg">{t("newWebTool")}</h2>
        </div>
        <RenderWebToolList locale={locale} toolKeys={toolKeysName} />
      </div>
    </div>
  );
}
