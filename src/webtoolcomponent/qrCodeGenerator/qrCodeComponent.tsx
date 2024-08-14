"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import TextComponent from "./textComponent";

export default function QRCodeComponent(): React.JSX.Element {
  const [input, setInput] = useState<string>("");
  const qrDivRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("qrCodeGenerator");

  const handleDownload = () => {
    if (qrDivRef.current) {
      const qrCanvas = qrDivRef.current.children[0] as HTMLCanvasElement;
      // 새 a 태그를 만들고,이미지를 다운로드
      const link = document.createElement("a");
      link.href = qrCanvas.toDataURL("image/png");
      link.download = "webToolStack_QRcode.png";
      link.click();
    }
  };

  return (
    <div className="p-4 text-text-color flex flex-col justify-center">
      <div className="self-center max-w-3xl text-center my-6">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
        <p className="text-lg">{t("description")}</p>
      </div>
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <h2 className="mb-4 text-xl font-semibold">{t("inputLabel")}</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("inputPlaceholder")}
          rows={3}
          cols={50}
          className="p-2 rounded-2xl shadow-lg"
        />
        <h2 className="mt-2 mb-4 text-xl font-semibold">{t("outputLabel")}</h2>
        <div ref={qrDivRef}>
          <QRCodeCanvas value={input} size={256} level="H" includeMargin />
        </div>
        <button onClick={handleDownload} className="mt-8 p-2 bg-primary-color text-white rounded-2xl shadow-lg">
          {t("copyBtn")}
        </button>
      </div>
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <TextComponent />
      </div>
    </div>
  );
}
