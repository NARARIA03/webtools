"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import TextComponent from "./textComponent";

export default function ReactionTimeComponent(): React.JSX.Element {
  const t = useTranslations("reactionTimeTest");
  const [gameState, setGameState] = useState<"idle" | "waiting" | "click" | "tooSoon">("idle");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const startGame = () => {
    setGameState("waiting");
    const randomDelay = Math.floor(Math.random() * 5000) + 2000; // 2초에서 7초 사이의 랜덤 시간
    const id = setTimeout(() => {
      setGameState("click");
      setStartTime(Date.now());
    }, randomDelay);
    setTimeoutId(id);
  };

  const calculatePercentile = (reactionTime: number): number => {
    if (reactionTime < 150) return 1;
    if (reactionTime < 175) return 5;
    if (reactionTime < 200) return 10;
    if (reactionTime < 225) return 20;
    if (reactionTime < 250) return 30;
    if (reactionTime < 275) return 40;
    if (reactionTime < 300) return 50;
    if (reactionTime < 325) return 60;
    if (reactionTime < 350) return 70;
    if (reactionTime < 375) return 80;
    if (reactionTime < 400) return 90;
    return 95;
  };

  const handleClick = () => {
    if (gameState === "waiting") {
      setGameState("tooSoon");
      if (timeoutId) clearTimeout(timeoutId);
      setTimeout(() => {
        setGameState("idle");
      }, 1500);
    } else if (gameState === "click" && startTime) {
      setReactionTime(Date.now() - startTime);
      setGameState("idle");
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  return (
    <div className="p-4 text-text-color flex flex-col justify-center items-center">
      <div className="self-center max-w-3xl text-center my-6">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
        <p className="text-lg">{t("description")}</p>
      </div>

      <div
        className={`max-w-4xl w-full h-64 flex justify-center items-center mt-4 ${
          gameState === "waiting"
            ? "bg-red-500"
            : gameState === "click"
            ? "bg-green-500"
            : gameState === "tooSoon"
            ? "bg-yellow-500"
            : "bg-gray-300"
        }`}
        onClick={handleClick}
      >
        {gameState === "idle" && (
          <button onClick={startGame} className="w-full h-full p-6 text-xl">
            {t("startBtn")}
          </button>
        )}
        {gameState === "waiting" && <p className="text-2xl text-white">{t("waiting")}</p>}
        {gameState === "click" && <p className="text-2xl text-white">{t("clickNow")}</p>}
        {gameState === "tooSoon" && <p className="text-2xl text-white">{t("tooSoon")}</p>}
      </div>

      {reactionTime !== null && (
        <div className="mt-6">
          <p className="text-xl">{t("result", { time: reactionTime })}</p>
          <p className="text-xl mt-2">{t("percentile", { percent: calculatePercentile(reactionTime) })}</p>
        </div>
      )}

      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <TextComponent />
      </div>
    </div>
  );
}
