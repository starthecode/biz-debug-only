import React from 'react';
import { LineSvg } from '../Home/Headings/LineSvg';

export const HeadingWithList = ({ small, main, classes, desc }: any) => {
  return (
    <>
      <div className={`flex flex-wrap`}>
        <div className="w-full px-4">
          {small && (
            <h5 className="text-sm font-inter font-semibold tracking-wide uppercase">
              <span className="shadow-lg border border-woodsmoke-400/50 bg-gradient-to-b from-white to-transparent dark:bg-gradient-to-b dark:from-woodsmoke-950 dark:to-transparent transition-shadow relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 px-5 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
                <span className="bg-flamingo-500 dark:bg-gradient-to-r dark:from-flamingo-500 dark:to-flamingo-200 bg-clip-text text-transparent">
                  {small}
                </span>
              </span>
            </h5>
          )}

          <h1 className="mt-3 mb-4 block text-4xl text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
            {main}
          </h1>
          <ul className="flex flex-col gap-4">
            {desc?.map((item: any, index: any) => (
              <li key={index} className="text-2xl">
                {' '}
                <h3 className="text-flamingo-500">{item.text1}</h3>
                <p>{item.text2}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
