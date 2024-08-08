"use client";

import RenderWebToolList from "@/components/renderWebToolList";
import { categoryKeys, toolKeys } from "@/utils/webToolKeys";
import { useLocale, useTranslations } from "next-intl";
import { notFound, usePathname } from "next/navigation";

export default function CategoryPage(): React.JSX.Element {
  const path = usePathname();
  const pathParts = path.split("/");
  const thisCategory = pathParts[2] ? pathParts[2] : "";

  if (!categoryKeys.includes(thisCategory)) {
    notFound();
  }

  const locale = useLocale();
  const t = useTranslations("MainPage");
  const categoriedKeyName = toolKeys.filter((value) => value.category === thisCategory).map((value) => value.name);

  return (
    <div className="w-full h-full">
      <div className="p-4 text-text-color bg-background-color flex flex-col justify-center ">
        <div className="w-full max-w-4xl mt-2 mx-auto">
          <h2 className="text-lg">{t(`categories.${thisCategory}.value`)}</h2>
        </div>
        <RenderWebToolList toolKeys={categoriedKeyName} locale={locale} />
      </div>
    </div>
  );
}
