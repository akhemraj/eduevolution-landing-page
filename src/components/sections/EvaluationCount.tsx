const EvaluationCount = async () => {
  const res = await fetch(
    "https://backend.edusageai.com/public/evaluations/count",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();
  const evaluationCount = data?.data ?? 0;

  return (
    <>
      <div className="w-full h-[220px] my-[60px] flex flex-col justify-center items-center bg-[url('/images/evaluationCountBg.png')] bg-right-bottom md:bg-center bg-no-repeat bg-cover">
        <h2 className="text-[26px] sm:text-[28px] md:text-[32px] lg:text-[42px] font-bold text-blue-600">
          {evaluationCount?.toLocaleString()}{" "}
          <span className="inline-block -translate-y-1 md:-translate-y-[6px]">
            +
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-blue-500 font-semibold text-center">
          Assignments evaluated so far...
        </p>
      </div>
    </>
  );
};

export default EvaluationCount;
