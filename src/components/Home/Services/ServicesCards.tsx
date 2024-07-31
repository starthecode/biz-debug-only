import Image from 'next/image';
import React from 'react';
import { DotAnimationSVG } from '@/components/svg';
import { SecondaryButton } from '@/components/Buttons/SecondaryButton';

const ServicesCards = () => {
  return (
    <>
      <div className="grid sm:grid-cols-12 gap-10 mt-10">
        <div className="sm:col-span-12 flex justify-center">
          <div className="group overflow-hidden w-fit relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
            <div className="relative rounded-3xl border-[1px] border-woodsmoke-300/20 bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950 z-10">
              <div className="group relative overflow-hidden rounded-3xl px-7 py-7 xl:p-15 box-hover before:bg-flamingo-500/20 dark:before:bg-junglegreen-500/20">
                <div className="flex items-center justify-between relative z-20">
                  <div className="max-w-[477px] w-full">
                    <span className="w-fit px-5 border border-onyx-400/40 relative mb-4 font-medium text-sm flex text-left gap-2 py-2 rounded-full">
                      <span className="font-bold text-md lg:text-lg xl:text-lg text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                        Artificial Intelegence
                      </span>
                    </span>

                    <p className="text-md font-medium text-ebony-700 dark:text-[#9ca3af]">
                      Transform your legacy technology with AI-enabled
                      processes. Witness an imaginable improvement in your
                      business with the latest intelligent developments.
                    </p>

                    <SecondaryButton title="Learn More" link="/" />
                  </div>
                  <div className="hidden sm:hidden md:flex xl:flex max-w-[428px] w-full justify-center items-center">
                    <Image
                      width={300}
                      height={300}
                      className="w-auto h-auto mix-blend-color-dodge"
                      src="/images/ai_services_img.png"
                      alt="icon"
                    />
                  </div>
                  <DotAnimationSVG />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:col-span-6 group overflow-hidden w-fit relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
          <div className="relative rounded-3xl border-[1px] border-woodsmoke-300/20 bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950 z-10">
            <div className="group h-[320px] relative overflow-hidden rounded-3xl p-7 py-7 box-hover-2 before:bg-flamingo-500/20 dark:before:bg-junglegreen-500/20">
              <div className="relative z-20 flex flex-col">
                <div className="w-fit">
                  <div className="block mt-8 px-5 border border-onyx-400/40 relative mb-4 font-medium text-sm gap-2 py-2 rounded-full">
                    <span className="font-bold text-md lg:text-lg xl:text-lg text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                      Data Analytics
                    </span>
                  </div>
                </div>

                <p className="text-md font-medium text-ebony-700 dark:text-[#9ca3af]">
                  Adopt the best analytics methodologies and reporting solutions
                  to bring out the enterprise-centric insights from the large
                  data volumes.
                </p>
                <SecondaryButton title="Learn More" link="/" />
              </div>
            </div>
          </div>
        </div>

        <div className="sm:col-span-6 group overflow-hidden w-fit relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
          <div className="relative rounded-3xl border-[1px] border-woodsmoke-300/20 bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950 z-10">
            <div className="group h-[320px] relative overflow-hidden rounded-3xl p-7 py-7 box-hover-2 before:bg-flamingo-500/20 dark:before:bg-junglegreen-500/20">
              <div className="relative z-20 flex flex-col justify-start items-start text-left mt-8">
                <div className="w-fit px-5 border border-onyx-400/40 relative mb-4 font-medium text-sm inline-flex items-center gap-2 py-2 rounded-full">
                  <span className="font-bold text-md lg:text-lg xl:text-lg text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                    Enterprise Applications
                  </span>
                </div>
                <p className="text-md font-medium text-ebony-700 dark:text-[#9ca3af]">
                  Right from development and modernization to maintenance, we
                  fulfill the end-to-end requirement of the ERP and application
                  services using a value-added approach.
                </p>
                <SecondaryButton title="Learn More" link="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesCards;
