import { PrimaryButton } from '@/components/Buttons/PrimaryButton';
import { Heading3 } from '@/components/Headings/Heading3';
import { SideStrips } from '@/components/svg';
import Image from 'next/image';

const Choose = () => {
  return (
    <>
      <section className="relative overflow-hidden mt-24 sm:mt-24 md:mt-32 xl:mt-40 pb-20">
        <div className="pointer-events-none z-10 absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/30 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30 dark:opacity-100">
            <SideStrips />
          </div>
        </div>
        <div className="container">
          <div className="flex w-full justify-center text-center items-center sm:justify-center sm:text-center sm:items-center md:justify-center md:text-center md:items-center lg:justify-start lg:text-left lg:items-start">
            <Heading3
              align={'left'}
              mobileAlign={'center'}
              small={'Why Choose Our Services'}
              main={'Trusted by the Worlds Leading Organizations'}
              specialTitle={''}
              classes={'font-inter'}
              desc={''}
            />{' '}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center mt-10">
            <div className="w-full flex items-center justify-center">
              <div className="w-fit relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
                <div className="grid items-center p-4 gap-12 ring-ebony-400 dark:ring-white/10 ring-1 rounded-2xl bg-ebony-200 shadow-massive">
                  <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                    <Image
                      src={'/temp/26546.jpg'}
                      alt="Business Challenges"
                      width={300}
                      height={300}
                      className="object-contain rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-junglegreen-600 font-semibold text-xs uppercase rounded-full bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950">
                      1
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8">
                  <p className="flex flex-col text-md text-ebony-700 dark:text-[#9ca3af]">
                    <span className="text-lg font-bold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                      Digitally Reliable
                    </span>
                    Improving business agility with proven business strategies
                    and exceptional technological capabilities in Big Data &
                    Advanced Analytics.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-junglegreen-600 font-semibold text-xs uppercase rounded-full bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950">
                      2
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8">
                  <p className="flex flex-col text-md text-ebony-700 dark:text-[#9ca3af]">
                    <span className="text-lg font-bold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                      Subject Matter Expertise{' '}
                    </span>
                    Diversified industrial exposure with the right mix of
                    technology, frameworks, services, methodologies, solutions,
                    and expertise.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-junglegreen-600 font-semibold text-xs uppercase rounded-full bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950">
                      3
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8">
                  <p className="flex flex-col text-md text-ebony-700 dark:text-[#9ca3af]">
                    <span className="text-lg font-bold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                      Performance Driven
                    </span>
                    Enabling a 360-degree view of your customer engagement with
                    extraordinary support and personalized experience.
                  </p>
                </div>
              </div>

              <div className="flex gap-x-5 ms-1">
                <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                  <div className="relative z-10 size-8 flex justify-center items-center">
                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-junglegreen-600 font-semibold text-xs uppercase rounded-full bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950">
                      4
                    </span>
                  </div>
                </div>

                <div className="grow pt-0.5 pb-8">
                  <p className="flex flex-col text-md text-ebony-700 dark:text-[#9ca3af]">
                    <span className="text-lg font-bold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                      Technical Expertise
                    </span>
                    Technical Expertise Our technical experts aim at making your
                    business model digitally smart and delivers the robust and
                    state of art technological solutions.
                  </p>
                </div>
              </div>

              <div className="w-fit flex gap-x-5 ms-3">
                <PrimaryButton title="Talk to Expert" link={''} />
              </div>
            </div>
          </div>
        </div>

        <div className="transform scale-x-[-1] scale-y-[-1] pointer-events-none absolute right-1/2 bottom-0 -ml-20 -mt-2 h-full w-full dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/30 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30 dark:opacity-100">
            <SideStrips />
          </div>
        </div>
      </section>
      <div className="container">
        <div className="max-w-5xl px-4 mx-auto mt-10">
          <div className="w-full relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
            <div className="p-4 lg:p-8 rounded-3xl relative group h-full inner-content pt-16 pb-20 border border-ebony-400/30 shadow-lg bg-[#f7f9fc] dark:bg-gradient-to-t from-onyx-950 to-woodsmoke-950">
              <div className="grid grid-cols-1 sm:grid-cols-4 items-center gap-y-20 gap-x-12">
                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    className="flex-shrink-0 size-6 sm:size-8 text-junglegreen-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m11 17 2 2a1 1 0 1 0 3-3"></path>
                    <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"></path>
                    <path d="m21 3 1 11h-2"></path>
                    <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"></path>
                    <path d="M3 4h8"></path>
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                      10+
                    </h3>
                    <p className="mt-1 font-medium text-md text-ebony-700 dark:text-[#9ca3af]">
                      Years in Business
                    </p>
                  </div>
                </div>

                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <div className="flex justify-center items-center -space-x-5">
                    <Image
                      width={100}
                      height={100}
                      className="relative z-[2] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                      src="/temp/user_sm-face1.jpg"
                      alt="Image Description"
                    />
                    <Image
                      width={100}
                      height={100}
                      className="relative z-[1] flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800 -mt-7"
                      src="/temp/user_sm-face2.jpg"
                      alt="Image Description"
                    />
                    <Image
                      width={100}
                      height={100}
                      className="relative flex-shrink-0 size-8 rounded-full border-[3px] border-neutral-800"
                      src="/temp/user_sm-face3.jpg"
                      alt="Image Description"
                    />
                  </div>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                      60+
                    </h3>
                    <p className="mt-1 font-medium text-md text-ebony-700 dark:text-[#9ca3af]">
                      Consultants
                    </p>
                  </div>
                </div>

                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    className="flex-shrink-0 size-6 sm:size-8 text-junglegreen-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path>
                    <path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"></path>
                    <path d="m2 16 6 6"></path>
                    <circle cx="16" cy="9" r="2.9"></circle>
                    <circle cx="6" cy="5" r="3"></circle>
                  </svg>
                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                      100+
                    </h3>
                    <p className="mt-1 font-medium text-md text-ebony-700 dark:text-[#9ca3af]">
                      Projects Completed
                    </p>
                  </div>
                </div>

                <div className="relative text-center first:before:hidden before:absolute before:-top-full sm:before:top-1/2 before:start-1/2 sm:before:-start-6 before:w-px before:h-20 before:bg-neutral-800 before:rotate-[60deg] sm:before:rotate-12 before:transform sm:before:-translate-y-1/2 before:-translate-x-1/2 sm:before:-translate-x-0 before:mt-3.5 sm:before:mt-0">
                  <svg
                    className="flex-shrink-0 size-6 sm:size-8 text-junglegreen-600 mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M6 12c0-1.1.9-2 2-2h8a2 2 0 1 1 0 4h-3a2 2 0 0 0-2 2v4"></path>
                    <path d="M9 10L12 2"></path>
                    <path d="M15 10L12 2"></path>
                    <path d="M10 22L12 18"></path>
                    <path d="M14 22L12 18"></path>
                    <circle cx="6" cy="6" r="1"></circle>
                    <circle cx="18" cy="6" r="1"></circle>
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="18" r="1"></circle>
                  </svg>

                  <div className="mt-3 sm:mt-5">
                    <h3 className="text-lg sm:text-3xl font-semibold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                      10+
                    </h3>
                    <p className="mt-1 font-medium text-md text-ebony-700 dark:text-[#9ca3af]">
                      Countries
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Choose;
