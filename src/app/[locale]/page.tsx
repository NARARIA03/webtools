import CategoryBar from "@/components/categoryBar";
import { useLocale, useTranslations } from "next-intl";
import { toolKeys } from "@/utils/webToolKeys";
import RenderWebToolList from "@/components/renderWebToolList";

export default function MainPage() {
  const t = useTranslations("MainPage");
  const locale = useLocale();

  return (
    <div className="w-full h-full">
      <div className="pt-20 pb-4 bg-primary-color">
        <CategoryBar locale={locale} />
      </div>
      <div className="p-4 text-text-color bg-background-color flex flex-col justify-center ">
        <div className="w-full max-w-4xl mt-2 mx-auto">
          <h2 className="text-lg">{t("newWebTool")}</h2>
        </div>

        <RenderWebToolList locale={locale} toolKeys={toolKeys} />
      </div>
    </div>
  );
}
