import React from 'react';

export const HeadingLabel = ({ labelText }: any) => {
  return (
    <div className="w-fit mb-4 px-3 py-3 border border-ebony-400/30 bg-gradient-to-b from-white to-transparent dark:bg-gradient-to-b dark:from-woodsmoke-950 dark:to-transparent transition-shadow relative inline-flex items-center rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
      <h5 className="text-sm font-inter font-semibold text-foreground sm:leading-none uppercase block text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
        <span className="">{labelText}</span>
      </h5>
    </div>
  );
};
