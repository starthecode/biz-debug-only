import React from 'react';
import { LineSvg } from '../Home/Headings/LineSvg';

export const Heading2 = ({ small, main, specialTitle, classes, desc }: any) => {
  return (
    <>
      <div className="flex flex-wrap">
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

          <h1 className="mt-3 mb-4 font-inter tracking-[-0.02em] !leading-[1.2] font-extrabold text-2xl lg:text-4xl md:text-4xl text-ebonyclay-900 dark:text-white">
            {main}
            <span
              className={`${classes} relative bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight`}
            >
              {' '}
              {specialTitle}
            </span>
            {/* {words.map((word: string, index: any) => (
              <span key={index}>
                {word}
                {index !== words.length - 1 && ' '}
              </span>
            ))} */}
          </h1>
          <p>{desc}</p>
        </div>
      </div>
    </>
  );
};
