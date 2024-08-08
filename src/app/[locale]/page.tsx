import { useTranslations } from "next-intl";
import { toolKeys } from "@/utils/webToolKeys";
import RenderWebToolList from "@/components/renderWebToolList";

export default function MainPage({ params }: { params: { locale: string } }) {
  const t = useTranslations("MainPage");
  const locale = params.locale;
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
