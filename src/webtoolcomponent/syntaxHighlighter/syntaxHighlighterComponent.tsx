"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import Select from "react-select";
import domtoimage from "dom-to-image";
import { Prism as SyntaxHighlighter, SyntaxHighlighterProps } from "react-syntax-highlighter";
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

  // react-syntax-highlighter 라이브러리가 useRef를 지원 X.
  // useRef와 같이 가상DOM에 접근해서 조작을 하기 위해서 사용하는 편법, 새 pre 태그를 만들고, 여기에 ref를 붙여준다.
  // 그리고 이 새로 만든 pre 태그를 React.JSX.Element로 만들어서 SyntaxHighlighter의 PreTag 프롭스로 전달하는 방식.
  // https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/335

  // 전달했다면, 아까 만든 pre 태그에 붙인 ref로 조작해서 이미지를 뽑으면 된다.
  // https://github.com/tsayen/dom-to-image
  // html2canvas 라이브러리로는 overflow-x 상태인 요소를 전부 캡쳐할 수 없었고, 한참 삽질하다 결국 dom-to-image 라이브러리로 성공했다.

  // 특정 컴포넌트의 Props가 매개변수가 존재하는 함수인 경우, 해당 매개변수의 type이 궁금하다면, Props={(test) => {}} 와 같이 test를 넣고, 마우스를 올려보면 ts 에러 로그에 나온다.
  const preRef = useRef<HTMLPreElement>(null);
  const PreWithRef = (preProps: SyntaxHighlighterProps) => <pre {...preProps} ref={preRef} />;

  const t = useTranslations("syntaxHighlighter");

  /**
   * @description 언어 선택 핸들링 함수
   */
  const handleChangeLanguage = (selectedOption: SelectOption | null) => {
    if (selectedOption) {
      setLanguage(selectedOption);
    }
  };

  /**
   * @description 이미지로 저장 버튼 클릭 시 동작 함수
   */
  const handleSaveBtn = async () => {
    if (preRef.current) {
      try {
        const dataUrl = await domtoimage.toPng(preRef.current, {
          width: preRef.current.scrollWidth,
          quality: 100,
        });
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "code.png";
        link.click();
      } catch (e) {
        console.error(e);
      }
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
          customStyle={{ overflowX: "visible", whiteSpace: "pre" }}
          showLineNumbers={isLineNumber}
          showInlineLineNumbers={isLineNumber}
          wrapLongLines={isWrapLine}
          PreTag={PreWithRef}
          className="shadow-2xl"
        >
          {input}
        </SyntaxHighlighter>
        <div className="flex justify-between items-center flex-wrap">
          <button
            onClick={handleSaveBtn}
            className="flex-1 mt-8 mx-4 p-2 bg-primary-color hover:bg-secondary-color hover:scale-105 text-white rounded-2xl shadow-lg transition-all"
          >
            {t("saveBtn")}
          </button>
          <button className="flex-1 mt-8 mx-4 p-2 bg-primary-color hover:bg-secondary-color hover:scale-105 text-white rounded-2xl shadow-lg transition-all">
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
