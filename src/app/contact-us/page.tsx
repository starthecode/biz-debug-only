import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import { Heading3 } from '@/components/Headings/Heading3';
import { Contact } from '@/components/page/ContactUs/Contact';
import React from 'react';

export default function Page() {
  return (
    <section className="container mt-40">
      <div className="w-full text-center flex flex-col justify-center items-center">
        <div className="w-full">
          <div className="flex justify-start mb-5 mt-10">
            <Breadcrumbs
              props={'Case Study'}
              title={'Success Stories'}
              excerpt={'test'}
            />
          </div>
          <div className="w-full flex justify-start items-center text-left">
            <div className="w-[700px]">
              <Heading3
                align={'left'}
                small={'Contact us'}
                main={'Experience Our Potential'}
                specialTitle={''}
                classes={'font-inter'}
                desc={'We make digital transformation easy for our clients'}
              />{' '}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </section>
  );
}
