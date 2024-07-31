import React from 'react';

export const JobsCard = ({ jobs }: any) => {
  return (
    <div className="grid grid-cols-1 mt-8 gap-[30px]">
      {jobs &&
        jobs?.data?.careers?.nodes.map((job: any, index: any) => (
          <div
            key={index}
            className="group w-full ring-ebony-200 dark:ring-white/10 ring-1 rounded-3xl bg-gradient-to-t from-onyx-900 transition-all duration-500 p-3"
          >
            <div className="relative overflow-hidden md:flex justify-between items-center w-full z-10 border border-gray-600/30 dark:bg-transparent bg-white rounded-3xl p-3">
              <div className="flex items-center">
                <div className="size-14 flex items-center justify-center bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-md">
                  <img src="/temp/data-science.png" className="size-8" alt="" />
                </div>
                <a
                  href="job-detail-one.html"
                  className="text-lg hover:text-emerald-600 font-semibold transition-all duration-500 ms-3 min-w-[180px]"
                >
                  {job?.title}
                </a>
              </div>

              <div className="md:block flex justify-between md:mt-0 mt-4">
                <span className="block">
                  <span className="bg-emerald-600/10 inline-block text-emerald-600 text-xs px-2.5 py-0.5 font-semibold rounded-full">
                    Full Time
                  </span>
                </span>
                <span className="block text-slate-400 text-sm md:mt-1 mt-0">
                  <i className="uil uil-clock"></i> 20th Feb 2023
                </span>
              </div>

              <div className="md:block flex justify-between md:mt-0 mt-2">
                <span className="text-slate-400">
                  <i className="uil uil-map-marker"></i> Mumbai
                </span>
                {/* <span className="block font-semibold md:mt-1 mt-0">
                  $4,000 - $4,500
                </span> */}
              </div>

              <div className="md:mt-0 mt-4 flex items-center">
                <a
                  href=""
                  className="btn btn-icon p-2 rounded-full bg-emerald-600/5 hover:bg-emerald-600 border-emerald-600/10 hover:border-emerald-600 text-emerald-600 hover:text-white md:relative absolute top-0 end-0 md:m-0 m-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-bookmark size-4"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </a>
                <a
                  href={job?.uri}
                  className="btn rounded-md px-3 py-1 bg-emerald-600 hover:bg-emerald-700 border-emerald-600 hover:border-emerald-700 text-white md:ms-2 w-full md:w-auto"
                >
                  Apply Now
                </a>
              </div>

              <span className="w-24 bg-yellow-400 text-white text-center absolute ltr:-rotate-45 rtl:rotate-45 -start-[30px] top-1">
                <i className="uil uil-star"></i>
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};
