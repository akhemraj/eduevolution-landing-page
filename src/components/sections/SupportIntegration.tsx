import Image from "next/image";

const SupportIntegration = () => {
  return (
    <div className="px-5 lg:px-[120px] py-[60px] space-y-[30px] lg:space-y-[60px]">
      <div className="flex flex-col items-center">
        <h4 className="text-gray-700 underline font-semibold text-base lg:text-lg mb-7 lg:mb-4">
          Recognized and supported by:
        </h4>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-14">
          <div className="w-[200px] lg:w-[250px] h-[125px] lg:h-[150px] relative">
            <Image
              src="/images/google-startups-logo.png"
              alt="Google for Startups"
              className="object-contain"
              fill
            />
          </div>
          <div className="w-[220px] lg:w-[270px] h-[125px] lg:h-[150px] relative">
            <Image
              src="/images/startupindialogo.png"
              alt="Startup India"
              className="object-contain"
              fill
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h4 className="text-gray-700 underline font-semibold text-base lg:text-lg mb-12 lg:mb-10">
          LMS Integrations:
        </h4>
        <div className="flex flex-col space-y-12 space-x-0 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-14">
          <div className="w-[200px] lg:w-[206px] h-[42px] lg:h-[48px] relative">
            <Image
              src="/images/classroom.svg"
              alt="Google classroon"
              className="object-contain"
              fill
            />
          </div>
          <div className="w-[200px] lg:w-[206px] h-[42px] lg:h-[42px] relative">
            <Image
              src="/images/canvas-byInstructure.svg"
              alt="Canvas by Instructure"
              className="object-contain"
              fill
            />
          </div>
          <div className="w-[200px] lg:w-[206px] h-[42px] lg:h-[42px] relative">
            <Image
              src="/images/schoology.svg"
              alt="Schoology"
              className="object-contain"
              fill
            />
          </div>

          {/* <Image
            src="/images/classroom.svg"
            alt="Google for Startups"
            className="object-contain"
            width={206}
            height={42}
          /> */}
          {/* <Image
            src="/images/canvas-byInstructure.svg"
            alt="Google for Startups"
            className="object-contain"
            width={206}
            height={42}
          />
          <Image
            src="/images/schoology.svg"
            alt="Google for Startups"
            className="object-contain"
            width={206}
            height={42}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SupportIntegration;
