import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Cards2({ item }: any) {
  return (
    <div className="group overflow-hidden w-fit relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
      <div className="grid items-center p-4 gap-12 ring-ebony-400 dark:ring-white/10 ring-1 rounded-2xl bg-ebony-200/5 shadow-massive">
        <div
          aria-hidden="true"
          className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-success-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"
        ></div>
        <div className="relative">
          <div className="flex gap-5 items-center">
            <div className="px-4 py-2 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
              <Image
                src={item?.icon?.mediaItemUrl}
                alt="icon img"
                width={100}
                height={100}
                className="w-auto h-auto"
              />
            </div>
            <span className="font-bold text-lg">{item?.title}</span>
          </div>
          <div className="mt-6 pb-6 rounded-b-[1rem]">
            <p className="text-gray-700 dark:text-gray-300">{item?.text}</p>
          </div>

          <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600" />
        </div>
      </div>
    </div>
  );
}
