'use client';

import React from 'react';
import ServicesCards from './ServicesCards';
import { Heading3 } from '@/components/Headings/Heading3';

const Services = ({ services }: any) => {
  return (
    <>
      <section className="container mt-40">
        <div className="w-full flex justify-center items-center text-center">
          <Heading3
            align={'center'}
            small={'Our Services'}
            main={'Simplifying the Digital Adoption Journey'}
            specialTitle={''}
            classes={'font-inter'}
            desc={''}
          />{' '}
        </div>
        <div className="container">
          <div className="w-full flex justify-center items-center text-left">
            <div className="max-w-[900px] mx-auto">
              <ServicesCards />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
