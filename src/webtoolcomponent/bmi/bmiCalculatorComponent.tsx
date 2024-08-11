"use client";

import { useTranslations } from "next-intl";
import TextComponent from "./textComponent";
import { useEffect, useState } from "react";

interface Props {
  locale: string;
}

export default function BmiCalculatorComponent({ locale }: Props): React.JSX.Element {
  const t = useTranslations("bmiCalculator");
  const [unit, setUnit] = useState<"metric" | "imperial" | null>(null);
  const [bmi, setBmi] = useState<number | null>(null);
  const [bmiRate, setBmiRate] = useState<"1" | "2" | "3" | "4" | "5" | "6" | null>(null);
  const [height, setHeight] = useState<number | string>("");
  const [weight, setWeight] = useState<number | string>("");
  const [error, setError] = useState<string>("");

  const calculateBmi = () => {
    let heightInMeters = Number(height);
    let weightInKg = Number(weight);

    if (isNaN(weightInKg) || weightInKg <= 0) {
      setError(t("weightError"));
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (isNaN(heightInMeters) || heightInMeters <= 0) {
      setError(t("heightError"));
      setTimeout(() => {
        setError("");
      }, 2000);
      return;
    }

    if (unit === "metric") {
      heightInMeters = heightInMeters / 100;
    } else {
      heightInMeters = heightInMeters * 0.0254;
      weightInKg = weightInKg * 0.453592;
    }
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBmi(bmiValue);
  };

  useEffect(() => {
    if (locale === "en") {
      setUnit("imperial");
    } else if (locale === "ko") {
      setUnit("metric");
    }
  }, []);

  useEffect(() => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setBmiRate(null);
  }, [unit]);

  useEffect(() => {
    if (bmi !== null) {
      if (bmi < 18.5) {
        setBmiRate("1");
      } else if (bmi < 25) {
        setBmiRate("2");
      } else if (bmi < 30) {
        setBmiRate("3");
      } else if (bmi < 35) {
        setBmiRate("4");
      } else if (bmi < 40) {
        setBmiRate("5");
      } else if (bmi >= 40) {
        setBmiRate("6");
      }
    }
  }, [bmi]);

  return (
    <div className="p-4 text-text-color flex flex-col justify-center items-center">
      <div className="self-center max-w-3xl text-center my-6">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
        <p className="text-lg">{t("description")}</p>
      </div>

      <div className="w-full h-full max-w-4xl flex flex-col md:flex-row justify-center items-center">
        <div className="h-40 md:mr-20">
          <h2 className="m-2 text-xl font-semibold">{t("input")}</h2>
          <div className="flex flex-col max-w-xs">
            <input
              type="number"
              placeholder={unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className={`m-2 p-2 rounded-2xl shadow-xl border`}
            />
            <input
              type="number"
              placeholder={unit === "metric" ? "Height (cm)" : "Height (inches)"}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className={`m-2 p-2 rounded-2xl shadow-xl border`}
            />
          </div>
        </div>

        <div className="h-40 md:ml-20">
          <h2 className="m-2 text-xl font-semibold">{t("unit")}</h2>
          <div className="mb-4 flex flex-col">
            <label className="m-2">
              <input type="radio" value="metric" checked={unit === "metric"} onChange={() => setUnit("metric")} className="mr-2" />
              kg / cm
            </label>
            <label className="m-2">
              <input type="radio" value="imperial" checked={unit === "imperial"} onChange={() => setUnit("imperial")} className="mr-2" />
              lbs / inches
            </label>
          </div>
        </div>
      </div>
      <p className="self-center my-2 text-sm font-semibold text-red-600">{error}</p>
      <button
        onClick={calculateBmi}
        className="px-4 py-2 w-full max-w-xs bg-primary-color text-white rounded-2xl shadow-xl hover:bg-text-color hover:text-white hover:scale-105 transition-all"
      >
        {t("calculate")}
      </button>

      {bmi && bmiRate && (
        <div className="mt-4">
          <p className="mt-2 ml-4 text-base font-semibold text-red-600">
            {t("result")}: {bmi.toFixed(2)}
          </p>
          <p className="mt-2 ml-4 text-base font-semibold text-red-600">
            {t("resultRate")}: {t(`resultRateName.${bmiRate}`)}
          </p>
        </div>
      )}
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <TextComponent />
      </div>
    </div>
  );
}
