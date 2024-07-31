import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heading3 } from '@/components/Headings/Heading3';
import { Article } from './Article';

const Blog = ({ blogsData }: any) => {
  return (
    <>
      <div className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
        <div className="flex flex-col justify-center text-center mb-20">
          <div className="w-full flex justify-center items-center">
            <Heading3
              align={'center'}
              small={'Our Blogs'}
              main={'Tech Talk & News'}
              specialTitle={''}
              classes={'font-inter'}
              desc={''}
            />{' '}
          </div>
        </div>
        <Article blogsData={blogsData} />
      </div>
    </>
  );
};

export default Blog;
