"use client";

import { useTranslations } from "next-intl";
import TextComponent from "./textComponent";
import { useEffect, useState } from "react";

export default function BmiCalculatorComponent(): React.JSX.Element {
  const t = useTranslations("bmiCalculator");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [bmi, setBmi] = useState<number | null>(null);
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
    setWeight("");
    setHeight("");
  }, [unit]);

  return (
    <div className="p-4 text-text-color flex flex-col justify-center">
      <div className="self-center max-w-3xl text-center my-6">
        <h1 className="text-2xl font-bold mb-2">{t("title")}</h1>
        <p className="text-lg">{t("description")}</p>
      </div>
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <div className="w-full flex flex-row justify-around items-center">
          <div>
            <h2 className="mb-4 text-xl font-semibold">{t("input")}</h2>
            <div>
              <div className="mb-4 max-w-2xl">
                <input
                  type="number"
                  placeholder={unit === "metric" ? "Weight (kg)" : "Weight (lbs)"}
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  className={`p-2 rounded-2xl shadow-xl border`}
                />
              </div>
              <div className="mb-4">
                <input
                  type="number"
                  placeholder={unit === "metric" ? "Height (cm)" : "Height (inches)"}
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  className={`p-2 rounded-2xl shadow-xl border`}
                />
              </div>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-xl font-semibold">{t("unit")}</h2>
            <div className="mb-4 flex flex-col">
              <label className="mr-4">
                <input type="radio" value="metric" checked={unit === "metric"} onChange={() => setUnit("metric")} className="mr-2" />
                kg/cm
              </label>
              <label>
                <input type="radio" value="imperial" checked={unit === "imperial"} onChange={() => setUnit("imperial")} className="mr-2" />
                lbs/inches
              </label>
            </div>
          </div>
        </div>

        <p className="self-center mt-2 text-sm font-semibold text-red-600">{error}</p>

        <div className="flex justify-center items-center mt-4">
          <button
            onClick={calculateBmi}
            className="px-4 py-2 w-full max-w-xs bg-primary-color text-white rounded-2xl shadow-xl hover:bg-text-color hover:text-white hover:scale-105 transition-all"
          >
            {t("calculate")}
          </button>
        </div>

        {bmi && (
          <div className="mt-4">
            <p className="mt-2 ml-4 text-base font-semibold text-red-600">Your BMI: {bmi.toFixed(2)}</p>
          </div>
        )}
      </div>
      <div className="max-w-4xl w-full mt-2 mx-auto p-4 text-text-color flex flex-col justify-center">
        <TextComponent />
      </div>
    </div>
  );
}
