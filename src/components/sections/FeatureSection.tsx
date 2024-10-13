import React from 'react';
import { Hourglass,LightbulbFilament,Scales ,UsersThree,SquaresFour} from "@phosphor-icons/react/dist/ssr";

function FeatureSection() {
  return (
    <>
    <div className='flex justify-center items-center'>

    <div  className="text-center mt-4 mb-3 bg-[#E1EFFE] font-semibold text-blue-600  focus:outline-none  font-medium rounded-full text-sm px-5 py-1.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
    <SquaresFour size={25} color="#1C64F2" className='mr-2 ' weight="fill" />

    Key Features
</div>
    </div>
    <h1 className='text-center text-4xl font-semibold mb-3'>Grading reimagined <span className='text-blue-600'>.</span> </h1>
    <div className='flex justify-center items-center h-80 w-full'>
      <div className='container pl-10 pr-10 mt-5 flex justify-center space-x-4'>
        <div className="w-72 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full">
              <Hourglass size={23} color="#1C64F2" />
            </div>
          </div>
          <h5 className="mb-2 mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Time saving for Teachers</h5>
          <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-700">AI automates grading, allowing teachers to focus on student engagement and personalized instruction</p>
        </div>

        <div className="w-72 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400 mb-3">
             <div className="flex items-center justify-center w-10 h-10 bg-yellow-50 rounded-full">
             <LightbulbFilament size={23} color="#E3A008" />
</div>
          </div>
          <h5 className="mb-2 mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Improved Insights</h5>
          <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-700">Generates detailed performance reports to identify strengths and weaknesses at individual and institutional levels</p>
        </div>

        <div className="w-72 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400 mb-3">
             <div className="flex items-center justify-center w-10 h-10 bg-yellow-50 rounded-full">
             <Scales size={23} color="#E5C100" />

</div>
          </div>
          <h5 className="mb-2 mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Fair Grading</h5>
          <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-700">AI eliminates bias, ensuring every student’s work is evaluated uniformly, enhancing equity in assignments</p>
        </div>

        <div className="w-72 h-64 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="text-gray-500 dark:text-gray-400 mb-3">
             <div className="flex items-center justify-center w-10 h-10 bg-green-50 rounded-full">
             <UsersThree size={23} color="#057A55" />


            </div>
          </div>
          <h5 className="mb-2 mt-5 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Enhanced Engagement</h5>
          <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-700">Dashboards offer real-time insights for teachers, students and parents fostering collaborations in learning process.</p>
        </div>
      </div>
    </div>
    </>
  );
}

export default FeatureSection;
