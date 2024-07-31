import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';
import { IconArrow } from '../icons';

type buttonProps = {
  title: string;
  link: string;
};

export const SecondaryButton = ({ title, link }: buttonProps) => {
  return (
    <div>
      <Link
        href={link}
        className="relative inline-flex items-center gap-1.5 rounded-full py-3 !text-flamingo-500 dark:!text-junglegreen-600 text-sm ease-in duration-300 hover:shadow-button mt-5"
      >
        {title}
        <span className="group-hover:-rotate-45 transition-all duration-400">
          <IconArrow />
        </span>
      </Link>
    </div>
  );
};
