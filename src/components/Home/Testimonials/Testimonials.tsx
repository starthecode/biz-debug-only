import { Heading3 } from '@/components/Headings/Heading3';
import { Blockquote } from './Blockquote';

const Testimonials = ({ testimonials }: any) => {
  return (
    <section className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
      <div className="container">
        <div className="flex flex-col justify-center text-center mb-5">
          <div className="w-full flex justify-center items-center">
            <Heading3
              align={'center'}
              small={'Client Testimonials'}
              main={'Simplifying the Digital Adoption Journey'}
              specialTitle={''}
              classes={'font-inter'}
              desc={''}
            />{' '}
          </div>
        </div>

        <div className="marquee">
          <div className="slide py-10">
            <Blockquote testimonials={testimonials} />
            <Blockquote testimonials={testimonials} />
            <Blockquote testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
