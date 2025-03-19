"use client";

import { useEffect, useState } from "react";
import SupportedBySection from "./SupportedBySection";

const EvaluationCount = () => {
  const [count, setCount] = useState(0);

  const fetchEvaluationsCount = async () => {
    try {
      const response = await fetch(
        "https://backend.edusageai.com/public/evaluations/count"
      );
      const data = await response.json();
      setCount(data?.data?.count || 0);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchEvaluationsCount();
  }, []);

  return (
    <>
      <SupportedBySection />
      <div className="w-full h-[120px] flex flex-col justify-center items-center bg-[url('/images/evaluationCountBg.png')] bg-right-bottom md:bg-center bg-no-repeat bg-cover mb-[110px]">
        <h2 className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[42px] font-bold text-blue-600">
          {count}{" "}
          <span className="inline-block -translate-y-1 md:-translate-y-[6px]">
            +
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 font-medium text-center">
          Assignments Evaluated
        </p>
      </div>
    </>
  );
};

export default EvaluationCount;
