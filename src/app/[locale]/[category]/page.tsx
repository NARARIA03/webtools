import RenderWebToolList from "@/components/renderWebToolList";
import { categoryKeys, toolKeys } from "@/utils/webToolKeys";
import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";

export default function CategoryPage({ params }: { params: { locale: string; category: string } }): React.JSX.Element {
  const { locale, category } = params;
  if (!categoryKeys.includes(category)) {
    notFound();
  }

  const t = useTranslations("MainPage");
  const categoriedKeyName = toolKeys.filter((value) => value.category === category).map((value) => value.name);

  return (
    <div className="w-full h-full">
      <div className="p-4 text-text-color bg-background-color flex flex-col justify-center ">
        <div className="w-full max-w-4xl mt-2 mx-auto">
          <h2 className="text-lg">{t(`categories.${category}.value`)}</h2>
        </div>
        <RenderWebToolList toolKeys={categoriedKeyName} locale={locale} />
      </div>
    </div>
  );
}
