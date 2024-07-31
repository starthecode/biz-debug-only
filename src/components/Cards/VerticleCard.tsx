import React from 'react';

export const VerticleCard = () => {
  return (
    <div className="w-fit relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
      <div className="z-10 border border-gray-600/30 dark:bg-woodsmoke-950/95 w-fit shadow-lg bg-white rounded-3xl p-3 flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center px-2 py-2">
          <span className="px-4 py-y mb-2 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
            <img
              alt="approach icon"
              loading="lazy"
              width="30"
              height="30"
              decoding="async"
              data-nimg="1"
              src="/temp/data-science.png"
            />
          </span>
          <h1 className="text-center text-sm uppercase font-normal">
            Data Science
          </h1>
          <p className="text-sm text-center mt-2 text-slate-400/90">
            4 Jobs Abailable{' '}
          </p>
          <span className="text-sm mt-5">Explore Jobs</span>
        </div>
      </div>
    </div>
  );
};
