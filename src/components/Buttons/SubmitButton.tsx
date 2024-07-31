import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

type buttonProps = {
  title: string;
};

export const SubmitButton = ({ title }: buttonProps) => {
  return (
    <div className="p-1 rounded-3xl bg-gray-950/5 border dark:border-white/10 dark:bg-white/5">
      <button
        type="submit"
        className="items-center shadow-flamingo-500/10 dark:shadow-junglegreen-500/10 group relative z-[1] flex w-full h-11 gap-1.5 rounded-3xl border border-flamingo-600 dark:border-junglegreen-600 bg-flamingo-500 dark:bg-junglegreen-500 px-4 shadow-md before:absolute before:inset-0 before:rounded-3xl before:border before:border-flamingo-500 before:bg-gradient-to-b before:from-flamingo-600 dark:before:border-junglegreen-700 dark:before:bg-gradient-to-b dark:before:from-junglegreen-600"
      >
        <span className="relative z-[2] flex items-center font-bold text-white">
          {title}
          <ArrowLongRightIcon className="ml-2 w-4 h-4" />
        </span>
      </button>
    </div>
  );
};
