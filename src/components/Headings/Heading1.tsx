import React from 'react';
import { TextGenerateEffect } from '../Effects/text-generate-effect';
import { TypewriterEffectSmooth } from '../Effects/typewriter-effect';

export const Heading1 = ({ small, main, specialTitle, classes, desc }: any) => {
  const words = main.split(' ').map((word: string) => ({ text: word }));

  // For demonstration purposes, let's add a className to the last word
  words[words.length - 1].className =
    'text-center overflow-hidden font-inter relative bg-gradient-to-r from-formalGreenLight to-formalGreen bg-clip-text text-transparent dark:to-secondaryLight';

  return (
    <>
      <div className="relative flex flex-wrap justify-center z-10">
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

          <TypewriterEffectSmooth words={words} />

          <p className="text-onyx-300">{desc}</p>
        </div>
      </div>
    </>
  );
};
