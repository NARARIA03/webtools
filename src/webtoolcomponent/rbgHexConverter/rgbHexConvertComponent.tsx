"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import TextComponent from "./textComponent";

export default function RgbHexComponent(): React.JSX.Element {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<string>("");
  const t = useTranslations("rgbHexConverter");

  const handleError = (error: "noInputError" | "invalidColorError") => {
    setInputError(t(error));
    setTimeout(() => {
      setInputError("");
    }, 2500);
  };

  const rgbToHex = () => {
    try {
      if (input === "") {
        handleError("noInputError");
        return;
      }
      const rgb = input.trim().match(/\d+/g);
      if (!rgb || rgb.length !== 3) {
        handleError("invalidColorError");
        return;
      }
      const hex = rgb
        .map((x) => {
          const hexVal = parseInt(x).toString(16);
          return hexVal.length === 1 ? "0" + hexVal : hexVal;
        })
        .join("");
      setOutput("#" + hex.toUpperCase());
    } catch (e) {
      handleError("invalidColorError");
    }
  };

  const hexToRgb = () => {
    try {
      if (input === "") {
        handleError("noInputError");
        return;
      }
      let hex = input.trim().replace("#", "");
      if (hex.length === 3) {
        hex = hex
          .split("")
          .map((char) => char + char)
          .join("");
      }
      if (hex.length !== 6) {
        handleError("invalidColorError");
        return;
      }
      const rgb = [parseInt(hex.slice(0, 2), 16), parseInt(hex.slice(2, 4), 16), parseInt(hex.slice(4, 6), 16)];
      setOutput(`rgb(${rgb.join(", ")})`);
    } catch (e) {
      handleError("invalidColorError");
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(output);
      setCopySuccess(t("copySuccess"));
      setTimeout(() => {
        setCopySuccess("");
      }, 2500);
    } catch (e) {
      setCopySuccess(t("copyError"));
      setTimeout(() => {
        setCopySuccess("");
      }, 2500);
    }
  };

  const errorStyle = inputError === "" ? "border-2 border-green-600" : "border-2 border-red-600";
  const copyStyle = copySuccess === t("copySuccess") ? "text-green-600" : "text-red-600";

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
          rows={3}
          cols={50}
          className={`${errorStyle} p-2 rounded-2xl shadow-lg`}
        />
        <p className="mt-2 ml-4 text-base font-semibold text-red-600">{inputError}</p>
        <div className="flex my-6">
          <button onClick={rgbToHex} className="p-2 m-2 bg-white rounded-2xl shadow-lg">
            {t("rgbToHexBtn")}
          </button>
          <button onClick={hexToRgb} className="p-2 m-2 bg-white rounded-2xl shadow-lg">
            {t("hexToRgbBtn")}
          </button>
        </div>
        <h2 className="mt-2 mb-4 text-xl font-semibold">{t("output")}</h2>
        <textarea value={output} readOnly rows={2} cols={50} className="p-2 rounded-2xl shadow-lg" />
        <button onClick={handleCopy} className="mt-8 p-2 bg-primary-color text-white rounded-2xl shadow-lg">
          {t("copyBtn")}
        </button>
        <p className={`mt-2 ml-4 text-base font-semibold ${copyStyle}`}>{copySuccess}</p>
      </div>
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <TextComponent />
      </div>
    </div>
  );
}
