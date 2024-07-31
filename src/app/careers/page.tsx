import { JobsCard } from '@/components/Cards/JobsCard';
import { VerticleCard } from '@/components/Cards/VerticleCard';
import { Slider1 } from '@/components/Extras/Sliders/Slider1';
import Faq1 from '@/components/FAQ/Faq1';
import { Heading3 } from '@/components/Headings/Heading3';
import { HeadingWithList } from '@/components/Headings/HeadingWithList';
import { HeroSection } from '@/components/page/Careers/HeroSection';
import { SideStrips } from '@/components/svg';
import { fetchRest } from '@/lib/fetchRest';
import { fetchGraphQL } from '@/lib/functions';
import { AllJobsQuery, CareersQuery } from '@/lib/queries/queries';

export default async function Careers() {
  const params = { slug: ['careers'] };

  // const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  // const { res } = await fetch(apiDomain + 'wp-json/wp/v2/jobs-by-category', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   next: { revalidate: 10 },
  // }).then((res) => res.json());

  const { data } = await fetchGraphQL(CareersQuery, params);
  const jobs = await fetchGraphQL(AllJobsQuery, params);

  return (
    <section className="mt-40">
      <HeroSection title={data.page.title} excerpt={data.page.excerpt} />

      <div className="relative overflow-hidden w-full mt-40">
        <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/30 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30 dark:opacity-100">
            <SideStrips />
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-2">
            <div>
              <HeadingWithList
                small={data.page.CareersPageFields?.smallTitle}
                main={data.page.CareersPageFields?.title}
                specialTitle={''}
                classes={'font-inter'}
                desc={data.page.CareersPageFields?.textFields}
              />
            </div>
            <div>
              <Slider1 slides={data.page.CareersPageFields?.careersSlider} />
            </div>
          </div>
        </div>
        <div className="transform scale-x-[-1] scale-y-[-1] pointer-events-none absolute right-1/2 bottom-0 -ml-20 -mt-2 h-full w-full dark:[mask-image:linear-gradient(white,transparent)]">
          <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/30 opacity-40 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30 dark:opacity-100">
            <SideStrips />
          </div>
        </div>
      </div>

      <div className="container mt-40">
        <div className="w-full flex justify-center items-center text-center">
          <Heading3
            small={'Category'}
            main={'Search jobs by category'}
            specialTitle={''}
            classes={'font-inter'}
            desc={''}
          />{' '}
        </div>
        <div className="flex gap-10 justify-center mt-10">
          <VerticleCard />
          <VerticleCard />
          <VerticleCard />
          <VerticleCard />
          <VerticleCard />
        </div>
      </div>

      <div className="container mt-40">
        <div className="w-full flex justify-center items-center text-center">
          <Heading3
            align={'center'}
            small={'Current Openings'}
            main={'Check Current Jobs'}
            specialTitle={''}
            classes={'font-inter'}
            desc={''}
          />{' '}
        </div>
        <div className="block mt-10">
          <JobsCard jobs={jobs} />
        </div>
      </div>

      <div className="container mt-20">
        <div className="">
          <Heading3
            align={'left'}
            small={'Perks'}
            main={'Our Perks & Benefits'}
            specialTitle={''}
            classes={'font-inter'}
            desc={''}
          />{' '}
        </div>

        <div className="container">
          <div className="grid grid-cols-3">
            <div className="relative group overflow-hidden p-[2rem] bg-transparent border-b border-r border-onyx-300/20">
              <div className="relative">
                <div className="flex gap-5 items-center">
                  <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.98em"
                      height="1em"
                      viewBox="0 0 256 263"
                    >
                      <defs>
                        <linearGradient
                          id="logosSupabaseIcon0"
                          x1="20.862%"
                          x2="63.426%"
                          y1="20.687%"
                          y2="44.071%"
                        >
                          <stop offset="0%" stopColor="#249361"></stop>
                          <stop offset="100%" stopColor="#3ecf8e"></stop>
                        </linearGradient>
                        <linearGradient
                          id="logosSupabaseIcon1"
                          x1="1.991%"
                          x2="21.403%"
                          y1="-13.158%"
                          y2="34.708%"
                        >
                          <stop offset="0%"></stop>
                          <stop offset="100%" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosSupabaseIcon0)"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="url(#logosSupabaseIcon1)"
                        fillOpacity="0.2"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="#3ecf8e"
                        d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-bold text-lg">Scalability</span>
                </div>
                <div className="mt-6 pb-6 rounded-b-[1rem]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                {/* <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div> */}
              </div>
            </div>

            <div className="relative group overflow-hidden p-[2rem] bg-transparent border-b border-r border-onyx-300/20">
              <div className="relative">
                <div className="flex gap-5 items-center">
                  <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.98em"
                      height="1em"
                      viewBox="0 0 256 263"
                    >
                      <defs>
                        <linearGradient
                          id="logosSupabaseIcon0"
                          x1="20.862%"
                          x2="63.426%"
                          y1="20.687%"
                          y2="44.071%"
                        >
                          <stop offset="0%" stopColor="#249361"></stop>
                          <stop offset="100%" stopColor="#3ecf8e"></stop>
                        </linearGradient>
                        <linearGradient
                          id="logosSupabaseIcon1"
                          x1="1.991%"
                          x2="21.403%"
                          y1="-13.158%"
                          y2="34.708%"
                        >
                          <stop offset="0%"></stop>
                          <stop offset="100%" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosSupabaseIcon0)"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="url(#logosSupabaseIcon1)"
                        fillOpacity="0.2"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="#3ecf8e"
                        d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-bold text-lg">Scalability</span>
                </div>
                <div className="mt-6 pb-6 rounded-b-[1rem]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                {/* <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div> */}
              </div>
            </div>

            <div className="relative group overflow-hidden p-[2rem] bg-transparent border-b border-onyx-300/20">
              <div className="relative">
                <div className="flex gap-5 items-center">
                  <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.98em"
                      height="1em"
                      viewBox="0 0 256 263"
                    >
                      <defs>
                        <linearGradient
                          id="logosSupabaseIcon0"
                          x1="20.862%"
                          x2="63.426%"
                          y1="20.687%"
                          y2="44.071%"
                        >
                          <stop offset="0%" stopColor="#249361"></stop>
                          <stop offset="100%" stopColor="#3ecf8e"></stop>
                        </linearGradient>
                        <linearGradient
                          id="logosSupabaseIcon1"
                          x1="1.991%"
                          x2="21.403%"
                          y1="-13.158%"
                          y2="34.708%"
                        >
                          <stop offset="0%"></stop>
                          <stop offset="100%" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosSupabaseIcon0)"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="url(#logosSupabaseIcon1)"
                        fillOpacity="0.2"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="#3ecf8e"
                        d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-bold text-lg">Scalability</span>
                </div>
                <div className="mt-6 pb-6 rounded-b-[1rem]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                {/* <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div> */}
              </div>
            </div>
            <div className="relative group overflow-hidden p-[2rem] bg-transparent border-b border-r border-onyx-300/20">
              <div className="relative">
                <div className="flex gap-5 items-center">
                  <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.98em"
                      height="1em"
                      viewBox="0 0 256 263"
                    >
                      <defs>
                        <linearGradient
                          id="logosSupabaseIcon0"
                          x1="20.862%"
                          x2="63.426%"
                          y1="20.687%"
                          y2="44.071%"
                        >
                          <stop offset="0%" stopColor="#249361"></stop>
                          <stop offset="100%" stopColor="#3ecf8e"></stop>
                        </linearGradient>
                        <linearGradient
                          id="logosSupabaseIcon1"
                          x1="1.991%"
                          x2="21.403%"
                          y1="-13.158%"
                          y2="34.708%"
                        >
                          <stop offset="0%"></stop>
                          <stop offset="100%" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosSupabaseIcon0)"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="url(#logosSupabaseIcon1)"
                        fillOpacity="0.2"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="#3ecf8e"
                        d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-bold text-lg">Scalability</span>
                </div>
                <div className="mt-6 pb-6 rounded-b-[1rem]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                {/* <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div> */}
              </div>
            </div>

            <div className="relative group overflow-hidden p-[2rem] bg-transparent border-b border-r border-onyx-300/20">
              <div className="relative">
                <div className="flex gap-5 items-center">
                  <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.98em"
                      height="1em"
                      viewBox="0 0 256 263"
                    >
                      <defs>
                        <linearGradient
                          id="logosSupabaseIcon0"
                          x1="20.862%"
                          x2="63.426%"
                          y1="20.687%"
                          y2="44.071%"
                        >
                          <stop offset="0%" stopColor="#249361"></stop>
                          <stop offset="100%" stopColor="#3ecf8e"></stop>
                        </linearGradient>
                        <linearGradient
                          id="logosSupabaseIcon1"
                          x1="1.991%"
                          x2="21.403%"
                          y1="-13.158%"
                          y2="34.708%"
                        >
                          <stop offset="0%"></stop>
                          <stop offset="100%" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosSupabaseIcon0)"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="url(#logosSupabaseIcon1)"
                        fillOpacity="0.2"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="#3ecf8e"
                        d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-bold text-lg">Scalability</span>
                </div>
                <div className="mt-6 pb-6 rounded-b-[1rem]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                {/* <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div> */}
              </div>
            </div>

            <div className="relative group overflow-hidden p-[2rem] bg-transparent border-b border-onyx-300/20">
              <div className="relative">
                <div className="flex gap-5 items-center">
                  <div className="p-4 w-fit border border-success-500/10 flex relative *:relative *:size-6 *:m-auto size-12 rounded-[1rem] dark:bg-gray-900 dark:border-white/15 before:rounded-[1rem] before:absolute before:inset-0 before:border-t before:border-white before:from-success-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="0.98em"
                      height="1em"
                      viewBox="0 0 256 263"
                    >
                      <defs>
                        <linearGradient
                          id="logosSupabaseIcon0"
                          x1="20.862%"
                          x2="63.426%"
                          y1="20.687%"
                          y2="44.071%"
                        >
                          <stop offset="0%" stopColor="#249361"></stop>
                          <stop offset="100%" stopColor="#3ecf8e"></stop>
                        </linearGradient>
                        <linearGradient
                          id="logosSupabaseIcon1"
                          x1="1.991%"
                          x2="21.403%"
                          y1="-13.158%"
                          y2="34.708%"
                        >
                          <stop offset="0%"></stop>
                          <stop offset="100%" stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#logosSupabaseIcon0)"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="url(#logosSupabaseIcon1)"
                        fillOpacity="0.2"
                        d="M149.602 258.579c-6.718 8.46-20.338 3.824-20.5-6.977l-2.367-157.984h106.229c19.24 0 29.971 22.223 18.007 37.292z"
                      ></path>
                      <path
                        fill="#3ecf8e"
                        d="M106.399 4.37c6.717-8.461 20.338-3.826 20.5 6.976l1.037 157.984H23.037c-19.241 0-29.973-22.223-18.008-37.292z"
                      ></path>
                    </svg>
                  </div>
                  <span className="font-bold text-lg">Scalability</span>
                </div>
                <div className="mt-6 pb-6 rounded-b-[1rem]">
                  <p className="text-gray-700 dark:text-gray-300">
                    Amet praesentium deserunt ex commodi tempore fuga
                    voluptatem. Sit, sapiente.
                  </p>
                </div>
                {/* <div className="flex gap-3 -mb-[1rem] py-4 border-dashed border-t dark:border-woodsmoke-600"></div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40">
        <div className="flex flex-col justify-center text-center items-center">
          <Heading3
            align={'center'}
            small={'FAQ'}
            main={'Any Questions? Look Here'}
            specialTitle={''}
            classes={'font-inter'}
            desc={
              'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.'
            }
          />{' '}
        </div>
        <Faq1 />
      </div>
    </section>
  );
}
