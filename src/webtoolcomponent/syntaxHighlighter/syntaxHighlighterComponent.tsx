"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Select from "react-select";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark, oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import TextComponent from "./textComponent";
import { languageOptions } from "./languageList";

type SelectOption = (typeof languageOptions)[0];

export default function SyntaxHighlighterComponent(): React.JSX.Element {
  const [input, setInput] = useState<string>("");
  const [language, setLanguage] = useState<SelectOption | null>(languageOptions[0]);
  const [isLineNumber, setIsLineNumber] = useState<boolean>(false);
  const [isWrapLine, setIsWrapLine] = useState<boolean>(false);
  const [isDark, setIsDark] = useState<boolean>(false);

  const t = useTranslations("syntaxHighlighter");

  const handleChangeLanguage = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      setLanguage(selectedOption);
    }
  };

  return (
    <div className="p-4 text-text-color flex flex-col justify-center">
      <div className="self-center max-w-3xl text-center my-6">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
        <p className="text-lg">{t("description")}</p>
      </div>
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <h2 className="mt-4 mb-4 text-xl font-semibold">{t("languageSelect")}</h2>
        <Select
          value={language}
          onChange={handleChangeLanguage}
          options={languageOptions}
          placeholder={t("languageSelect")}
          isSearchable
          instanceId={1}
          className="shadow-lg"
        />

        <h2 className="mt-6 mb-4 text-xl font-semibold">{t("input")}</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("inputPlaceholder")}
          rows={5}
          cols={50}
          className="p-2 rounded-2xl shadow-lg"
        />

        <div className="w-full mt-12 mb-4 flex justify-between items-center flex-wrap">
          <h2 className=" text-xl font-semibold">{t("output")}</h2>
          <div className="flex flex-wrap">
            <label htmlFor="isWrapLine" className="mx-2 p-1 cursor-pointer">
              {t("isWrapLine")}
              <input type="checkbox" id="isWrapLine" onChange={(e) => setIsWrapLine(e.target.checked)} className="ml-1" />
            </label>
            <label htmlFor="isLineNumber" className="mx-2 p-1 cursor-pointer">
              {t("isLineNumber")}
              <input type="checkbox" id="isLineNumber" onChange={(e) => setIsLineNumber(e.target.checked)} className="ml-1" />
            </label>
            <label htmlFor="swapStyle" className="mx-2 p-1 cursor-pointer">
              {t("isDark")}
              <input type="checkbox" id="swapStyle" onChange={(e) => setIsDark(e.target.checked)} className="ml-1" />
            </label>
          </div>
        </div>

        <SyntaxHighlighter
          language={language ? language.value : "javascript"}
          style={isDark ? oneDark : oneLight}
          className="rounded-2xl shadow-lg"
          showLineNumbers={isLineNumber}
          showInlineLineNumbers={isLineNumber}
          wrapLongLines={isWrapLine}
        >
          {input}
        </SyntaxHighlighter>
        <div className="flex justify-between items-center flex-wrap">
          <button className="flex-1 mt-8 mx-4 p-2 bg-primary-color hover:bg-secondary-color text-white rounded-2xl shadow-lg transition-all">
            {t("saveBtn")}
          </button>
          <button className="flex-1 mt-8 mx-4 p-2 bg-primary-color hover:bg-secondary-color text-white rounded-2xl shadow-lg transition-all">
            {t("shareBtn")}
          </button>
        </div>
      </div>
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <TextComponent />
      </div>
    </div>
  );
}
