"use client";

import { useRouterPath } from "@/hooks/useRouterPath";
import { useRouter } from "next/navigation";
import React from "react";

export default function LanguageSwitch(): React.JSX.Element {
  const path = useRouterPath();
  const router = useRouter();

  const changeLanguage = (locale: string) => {
    const curLocale = path.substring(0, 3);
    if (curLocale !== locale) {
      const newPath = path.replace(curLocale, locale);
      router.replace(newPath);
    }
    console.log(curLocale);
    console.log(path);
  };

  return (
    <div className="flex bottom-0 gap-1">
      <button className="text-white p-1" onClick={() => changeLanguage("/ko")}>
        KOR
      </button>
      <span className="text-white p-1">|</span>
      <button className="text-white p-1" onClick={() => changeLanguage("/en")}>
        ENG
      </button>
    </div>
  );
}
