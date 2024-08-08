"use client";

import RenderWebToolList from "@/components/renderWebToolList";
import { toolKeys } from "@/utils/webToolKeys";
import { useLocale, useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";

export default function CategoryPage(): React.JSX.Element {
  const searchParams = useSearchParams();
  // 쿼리 파라미터로 현재 주소에 적힌 카테고리값 가져오기
  const thisCategory = searchParams.get("category");
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
