'use client';
import Image from 'next/image';
import Slider from 'react-slick';

import { HeadingLabel } from '../Headings/HeadingLabel';
export const PartnerLogo = ({ partners }: any) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      <section className="relative overflow-hidden mt-14">
        <div className="container m-auto">
          <div className="block relative h-full w-full text-center">
            <div className="w-full flex justify-center items-center -mb-5">
              <HeadingLabel labelText={'Trusted by companies of all sizes'} />
            </div>
            <Slider {...settings}>
              {partners.map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex justify-center transition duration-200
                       focus-visible:outline-none "
                >
                  <Image
                    className="w-[140px] h-[140px] object-contain dark:brightness-0 dark:invert-[1]"
                    width="140"
                    height="140"
                    quality={100}
                    src={item?.partnerLogoImage?.sourceUrl}
                    alt="partner logo"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};
