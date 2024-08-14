"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import TextComponent from "./textComponent";

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export default function Base64Component(): React.JSX.Element {
  const [input, setInput] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [inputError, setInputError] = useState<string>("");
  const [copySuccess, setCopySuccess] = useState<string>("");
  const t = useTranslations("base64EncodeDecode");

  const handleError = (error: "noInputError" | "encodingError" | "decodingError") => {
    setInputError(t(error));
    setTimeout(() => {
      setInputError("");
    }, 2500);
  };

  const encoding = () => {
    try {
      if (input === "") {
        handleError("noInputError");
        return;
      }
      const utf8Bytes = encoder.encode(input);
      setOutput(btoa(String.fromCharCode(...Array.from(utf8Bytes))));
    } catch (e) {
      handleError("encodingError");
    }
  };

  const decoding = () => {
    try {
      if (input === "") {
        handleError("noInputError");
        return;
      }
      const binaryString = atob(input);
      const binaryBytes = new Uint8Array(binaryString.length);
      for (let i = 0; i < binaryString.length; i++) {
        binaryBytes[i] = binaryString.charCodeAt(i);
      }
      const res = decoder.decode(binaryBytes);
      if (res.includes("�")) {
        handleError("decodingError");
      } else {
        setOutput(res.replaceAll("�", ""));
      }
    } catch (e) {
      handleError("decodingError");
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
          rows={5}
          cols={50}
          className={`${errorStyle} p-2 rounded-2xl shadow-lg`}
        />
        <p className="mt-2 ml-4 text-base font-semibold text-red-600">{inputError}</p>
        <div className="flex my-6">
          <button onClick={encoding} className="p-2 m-2 bg-white rounded-2xl shadow-lg">
            {t("encodeBtn")}
          </button>
          <button onClick={decoding} className="p-2 m-2 bg-white rounded-2xl shadow-lg">
            {t("decodeBtn")}
          </button>
        </div>
        <h2 className="mt-2 mb-4 text-xl font-semibold">{t("output")}</h2>
        <textarea value={output} readOnly rows={5} cols={50} className="p-2 rounded-2xl shadow-lg" />
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
