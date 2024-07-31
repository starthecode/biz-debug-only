'use client';

import Slider from 'react-slick';

import { LeftCard } from './LeftCard';
import { RightCard } from './RightCard';
import imgG from '../../assets/imgs/gradient_dark.png';
import Image from 'next/image';
export const AnimatedSlider = ({ heroData }: any) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="m-auto relative sm:py-0 md:py-0 lg:pt-20 pb-3 overflow-hidden z-10">
      <div className="ml-auto mr-auto h-full max-w-full round__ui px-5 sm:px-5 md:px-24 2xl:px-56">
        <Slider {...settings}>
          {heroData.map((item: any, index: any) => (
            <div className={`item ${item?.addVideo && 'mt-28'}`} key={index}>
              <div className="grid h-full items-center gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2  relative z-20">
                <div className="flex h-full flex-col items-center justify-center sm:py-0 md:py-0 lg:mt-0 lg:items-start">
                  <LeftCard item={item} />
                </div>
                {item.homeSliderImage?.sourceUrl && (
                  <div className="block mt-10 sm:mt-10 md:mt-10 lg:mt-0">
                    <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                      <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-junglegreen-600/20 relative after:z-10"></span>
                      <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-junglegreen-600/20 relative after:z-10"></span>
                    </div>
                    <RightCard item={item} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <picture className="pointer-events-none absolute -left-[100px] top-[20%] -z-10 hidden dark:block">
        <Image priority={true} alt="" width="250" height="250" src={imgG} />
      </picture>
    </section>
  );
};
