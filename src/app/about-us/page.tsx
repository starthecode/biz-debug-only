import { StickyTimeline } from '@/components/Extras/Timeline/StickyTimeline';
import { Heading1 } from '@/components/Headings/Heading1';
import Explore from '@/components/page/AboutUsPage/Explore';
import Team from '@/components/page/AboutUsPage/Team';
import Testimonials from '@/components/page/AboutUsPage/Testimonials';
import Vision from '@/components/page/AboutUsPage/Vision';
import { fetchGraphQL } from '@/lib/functions';
import { AboutUsQuery } from '@/lib/queries/queries';
import Image from 'next/image';

const AboutUs = async () => {
  const params = { slug: ['about-us'] };
  const { data } = await fetchGraphQL(AboutUsQuery, params);
  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="px-20 pt-44 text-center w-[80em]">
          <Heading1
            small={'About Us'}
            main={'We are the leader in data transformation'}
            specialTitle={''}
            classes={'font-inter'}
            desc={
              'Our prowess in diagnosing & manipulating data has helped our clients reach goals that once seemed unapproachable. Data is not just a part of information, but an asset whenutilized effectively. Understanding the intrinsic requirements of the business and bridging the technological gap through efficient deliverables is the epitome of our work. We believe our success is directly proportional to the level of satisfaction of our customers.'
            }
          />
        </div>
        <div className="relative items-center w-full mx-auto mt-12 max-w-3xl lg:p-10 rounded-3xl lg:border border-gray-700">
          <iframe
            className="object-cover w-full border shadow-2xl rounded-xl border-white/5 lg:rounded-3xl shadow-junglegreen-700/30"
            width="560"
            height="350"
            src="https://www.youtube.com/embed/0DysrE4uCsk?si=RzFNZbX0KfndlY1I&amp;controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="flex items-end justify-center bg-vulcan-900 border-y border-white/5 mt-32">
          <div className="justify-center px-8 py-12 mx-auto max-w-7xl">
            <div className="grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="max-w-xl mx-auto col-span-full lg:max-w-none lg:mr-auto lg:col-span-1">
                <span className="justify-center w-auto px-4 py-2 text-center rounded-full bg-vulcan-800">
                  <span className="text-sm text-onyx-300">
                    {' '}
                    Our beloved client and partners
                  </span>{' '}
                </span>{' '}
              </div>
              <div className="mt-12 space-y-12 md:col-span-3 lg:mt-0">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-0.5 gap-y-16 md:grid-cols-3">
                  <div className="flex col-span-1 px-4 sm:px-8">
                    {' '}
                    <Image
                      width={200}
                      height={200}
                      className="max-h-12"
                      src="/temp/github.svg"
                      alt=" logo"
                    />
                  </div>
                  <div className="flex col-span-1 px-4 sm:px-8">
                    {' '}
                    <Image
                      width={200}
                      height={200}
                      className="max-h-12"
                      src="/temp/github.svg"
                      alt=" logo"
                    />
                  </div>
                  <div className="flex col-span-1 px-4 sm:px-8">
                    {' '}
                    <Image
                      width={200}
                      height={200}
                      className="max-h-12"
                      src="/temp/github.svg"
                      alt=" logo"
                    />
                  </div>
                  <div className="flex col-span-1 px-4 sm:px-8">
                    {' '}
                    <Image
                      width={200}
                      height={200}
                      className="max-h-12"
                      src="/temp/github.svg"
                      alt=" logo"
                    />
                  </div>
                  <div className="flex col-span-1 px-4 sm:px-8">
                    {' '}
                    <Image
                      width={200}
                      height={200}
                      className="max-h-12"
                      src="/temp/github.svg"
                      alt=" logo"
                    />
                  </div>
                  <div className="flex col-span-1 px-4 sm:px-8">
                    {' '}
                    <Image
                      width={200}
                      height={200}
                      className="max-h-12"
                      src="/temp/github.svg"
                      alt=" logo"
                    />
                  </div>{' '}
                </div>{' '}
              </div>{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </section>

      <div className="w-full grid justify-center px-8 mx-auto md:px-12 lg:px-32 max-w-7xl mb-40">
        <Explore />
      </div>

      <StickyTimeline timelineData={data?.page?.aboutUsAcf} />

      <Vision />

      <Team />

      <Testimonials />
    </>
  );
};

export default AboutUs;
