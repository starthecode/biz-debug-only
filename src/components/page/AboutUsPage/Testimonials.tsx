import { Heading2 } from '@/components/Headings/Heading2';
import { PatternGrid } from '@/components/PatternGrid';
import React from 'react';

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center px-8 relative w-full overflow-hidden py-20">
      <div className="text-center mb-4">
        <Heading2 small={'Testimonials'} main={''} desc={''} />
      </div>
      <div className="relative flex flex-col items-center">
        <blockquote className="max-w-4xl mx-auto text-sm md:text-2xl text-center !leading-9 text-slate-700 mb-8">
          <h2 className="text-white">
            The ML-enabled Logistics Solution of Bizmetric delivered out of the
            box results. The sales touched the top figure brackets with an
            extraordinary improvement in productivity.
          </h2>
        </blockquote>
        <h4 className="max-w-4xl mx-auto text-xs md:text-lg text-center !leading-9 text-flamingo-400 font-medium">
          Arif Maredia
        </h4>
        <span className="max-w-4xl mx-auto text-xs md:text-base text-center !leading-9 text-onyx-500">
          Supply Chain & Strategic Sourcing{' '}
        </span>
      </div>
      <div className="">
        <PatternGrid />
      </div>
    </div>
  );
};

export default Testimonials;
