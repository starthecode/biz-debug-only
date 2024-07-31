'use client';
import React, { useState } from 'react';

const Faq1 = () => {
  return (
    <section className="relative z-20 overflow-hidden bg-transparent pb-12 dark:bg-dark pt-20">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How do I apply for a position at Bizmetric?"
              text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
            />
            <AccordionItem
              header="How do I apply for a position at Bizmetric?"
              text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
            />
            <AccordionItem
              header="How do I apply for a position at Bizmetric?"
              text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <AccordionItem
              header="How do I apply for a position at Bizmetric?"
              text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
            />
            <AccordionItem
              header="How do I apply for a position at Bizmetric?"
              text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
            />
            <AccordionItem
              header="How do I apply for a position at Bizmetric?"
              text="We’re happy to hear that you’re interested in joining Bizmetric! To apply for a position, please visit our Careers page, where you’ll find all the relevant details. Typically, you will apply with your CV. We will thoroughly review your application and come back to you as soon as possible."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq1;

const AccordionItem = ({ header, text }: any) => {
  const [active, setActive] = useState(false);

  const handleToggle = ({ e }: any) => {
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg p-4 border border-ebony-400/30 shadow-lg bg-white dark:bg-gradient-to-t from-onyx-950 to-woodsmoke-950">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={(e) => handleToggle(e)}
      >
        <div
          className={`transition-colors duration-700 mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-flamingo-500 dark:bg-junglegreen-600 ${
            active ? 'dark:bg-flamingo-500 bg-junglegreen-500' : ''
          }`}
        >
          <svg
            className={`fill-white stroke-primary duration-200 ease-in-out ${
              active ? 'rotate-180' : ''
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-medium text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? 'block' : 'hidden'
        }`}
      >
        <p className="py-3 text-md leading-relaxed font-normal text-ebony-700 dark:text-[#9ca3af]">
          {text}
        </p>
      </div>
    </div>
  );
};
