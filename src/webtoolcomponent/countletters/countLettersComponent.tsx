"use client";

import { useTranslations } from "next-intl";
import TextComponent from "./textComponent";
import { useEffect, useState } from "react";

export default function CountLettersComponent() {
  const [input, setInput] = useState<string>("");
  const [charCount, setCharCount] = useState(0);
  const [charCountNoSpaces, setCharCountNoSpaces] = useState(0);
  const [wordCount, setWordCount] = useState(0);

  const t = useTranslations("countLetters");

  useEffect(() => {
    // 공백 포함 글자 수
    setCharCount(input.length);

    // 공백 제외 글자 수
    setCharCountNoSpaces(input.replace(/\s/g, "").length);

    // 단어 수 계산 (공백을 기준으로 단어를 구분)
    const wordsArray = input.trim().split(/\s+/);
    setWordCount(input.trim() ? wordsArray.length : 0);
  }, [input]);

  return (
    <div className="p-4 text-text-color flex flex-col justify-center">
      <div className="self-center max-w-3xl text-center my-6">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
        <p className="text-lg">{t("description")}</p>
      </div>
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <h2 className="mb-4 text-xl font-semibold">{t("input")}</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("inputPlaceholder")}
          rows={15}
          cols={50}
          className={`p-2 rounded-2xl shadow-lg`}
        />

        <h2 className="mt-8 mb-4 text-xl font-semibold">{t("output")}</h2>
        <p className="mt-2 ml-4 text-base font-semibold text-red-600">
          {t("charCount")}: {charCount}
        </p>
        <p className="mt-2 ml-4 text-base font-semibold text-text-color">
          {t("charCountNoSpaces")}: {charCountNoSpaces}
        </p>
        <p className="mt-2 ml-4 text-base font-semibold text-red-600">
          {t("wordCount")}: {wordCount}
        </p>
      </div>
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <TextComponent />
      </div>
    </div>
  );
}
