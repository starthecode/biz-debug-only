import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLongRightIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { PrimaryButton } from '../Buttons/PrimaryButton';

export const LeftCard = ({ item }: any) => {
  const services_items =
    'text-base md:text-md lg:text-lg xl:text-xl xl:px-0 block text-ebony-700 dark:text-[#9ca3af] font-inter font-normal flex flex-1';

  return (
    <>
      {item?.homeSliderMiniText && (
        <Link
          href="#"
          className="relative z-[1] shadow-xl overflow-hidden inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm bg-white rounded-full dark:bg-onyx-900 hover:bg-gray-200 dark:hover:bg-gray-700"
          role="alert"
        >
          <p className="glow_animation relative text-xs bg-junglegreen-500 rounded-full !text-white px-4 py-1.5 mr-3">
            New
          </p>{' '}
          <p className="text-sm font-medium dark:!text-white">
            {item?.homeSliderMiniText}
          </p>
          <ChevronRightIcon className="ml-2 w-4 h-4" />
        </Link>
      )}

      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className="mb-4 text-center font-inter lg:text-left text-foreground text-3xl sm:text-xl md:text-xl xl:text-6xl sm:leading-none"
      >
        <span className="block text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
          {item.homeSliderTitle1}
        </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-br dark:from-junglegreen-400 dark:via-junglegreen-500 dark:to-junglegreen-600 from-junglegreen-500 via-junglegreen-600 to-junglegreen-800 block md:ml-0">
          {item.homeSliderTitle2}
        </span>
      </motion.h1>

      <p className="mb-8 max-w-md text-center text-lg font-medium text-ebony-700 dark:text-[#9ca3af]  lg:text-left">
        {item.homeSliderDesc}
      </p>
      <div className="flex align-baseline">
        <PrimaryButton
          title={item.homeSliderBtn1Text}
          link={item.homeSliderBtn1Url}
        />

        <a
          href={item.homeSliderBtn2Url}
          className="flex items-center px-8 font-medium text-ebony- hover:text-flamingo-500 text-sm "
        >
          {item.homeSliderBtn2Text}
          <ArrowLongRightIcon className="ml-2 w-4 h-4" />
        </a>
      </div>

      {item.services1 && item.services2 && item.services3 && (
        <div className="flex flex-col items-center justify-center sm:justify-center md:justify-start w-full mt-8">
          <div className="w-[30rem] lg:w-[50rem] xl:w-[50rem] h-10 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-junglegreen-600 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-junglegreen-600 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
          </div>
          <div className="w-full flex gap-5 items-center sm:text-center md:text-left 2xl:text-left 2xl:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={services_items}
            >
              {item.services1 && (
                <div className="hover:text-flamingo-400">
                  <span>{item.services1.split(' ')[0]}</span>
                  <br />
                  <span>{item.services1.split(' ').slice(1).join(' ')}</span>
                </div>
              )}
            </motion.div>
            <div className="border__seprator" />
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={services_items}
            >
              {item.services2 && (
                <div className="hover:text-flamingo-400">
                  <span>{item.services2.split(' ')[0]}</span>
                  <br />
                  <span>{item.services2.split(' ').slice(1).join(' ')}</span>
                </div>
              )}
            </motion.div>
            <div className="border__seprator" />
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeInOut' }}
              className={services_items}
            >
              {item.services3 && (
                <div className="hover:text-flamingo-400">
                  <span>{item.services3.split(' ')[0]}</span>
                  <br />
                  <span>{item.services3.split(' ').slice(1).join(' ')}</span>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};
