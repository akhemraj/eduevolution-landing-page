const SupportedBySection = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-12 bg-white">
      <div className="w-full flex justify-center mb-6">
        <hr className="w-1/2 border-t border-gray-300" />
      </div>
      <h3 className="text-xl text-gray-600 font-medium mb-4 px-6 py-2 bg-gray-50 rounded-full">
        Supported by
      </h3>
      <div className="flex flex-row items-center justify-center gap-12 md:gap-24 lg:gap-[10.64rem] px-6">
        <img
          src="/images/google-startups-logo.png"
          alt="Google for Startups"
          className="h-20 md:h-36 lg:h-40 object-contain"
        />
        <img
          src="/images/startupindialogo.png"
          alt="Startup India"
          className="h-20 md:h-36 lg:h-40 object-contain"
        />
      </div>
    </div>
  );
};

export default SupportedBySection; 