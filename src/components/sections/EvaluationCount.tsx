const EvaluationCount = () => {
  return (
    <div className="w-full h-[240px] flex flex-col justify-center items-center bg-[url('/images/evaluationCountBg.png')] bg-right-bottom md:bg-center bg-no-repeat bg-cover mb-[110px]">
      <h2 className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[42px] font-bold text-blue-600">
        3943{" "}
        <span className="inline-block -translate-y-1 md:-translate-y-[6px]">
          +
        </span>
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 font-medium text-center">
        Assessments evaluated so far...
      </p>
    </div>
  );
};

export default EvaluationCount;
