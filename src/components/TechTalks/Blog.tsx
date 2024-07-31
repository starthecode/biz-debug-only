'use client';
import { formatDate } from '@/utils/utils';
import Image from 'next/image';
import React from 'react';
import SubscribeBox from '../Extras/SubscribeBox';
import Tags from '../Extras/Tags';
import Link from 'next/link';
import { Breadcrumbs } from '../Breadcrumbs/Breadcrumbs';
import Cards1 from '../Cards/Cards1';
import { Heading3 } from '../Headings/Heading3';

const Blog = ({ singleBlog, multiBlogs }: any) => {
  const { node } = singleBlog[0];

  return (
    <>
      <section className="relative z-10 py-24">
        <div className="container">
          <div className="w-full text-center flex flex-col justify-center items-center mb-20">
            <div className="w-full">
              <div className="flex justify-start mb-5 mt-10">
                <Breadcrumbs
                  props={'Case Study'}
                  title={'Success Stories'}
                  excerpt={'test'}
                />
              </div>
              <Heading3
                align={'left'}
                small={'Blogs'}
                main={'Tech Talk & Blogs'}
                specialTitle={''}
                classes={'font-inter'}
                desc={''}
              />{' '}
            </div>
          </div>
          <Tags />
          <div
            className="grid lg:grid-cols-3 grid-cols-1 gap-10 items-center lg:py-16 py-14 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-duration="300"
          >
            {singleBlog && (
              <div className="lg:col-span-2">
                <div className="grid md:grid-cols-5 gap-10">
                  <div className="md:col-span-2 col-span-3">
                    <Image
                      width={300}
                      height={300}
                      src={node.featuredImage.node.mediaItemUrl}
                      alt={node.title}
                      className="w-auto h-auto rounded-md"
                    />
                  </div>
                  <div className="col-span-3">
                    <div className="flex flex-col gap-5 justify-between xl:h-full">
                      <div>
                        {node?.categories?.nodes.map((cat: any) => (
                          <a
                            key={cat.name}
                            className="bg-orange-500/10 text-orange-500 font-medium rounded-md text-xs py-1 px-2 mr-2"
                            href={`blogs/${node.slug}`}
                          >
                            {cat.name}
                          </a>
                        ))}

                        <h1 className="text-lg my-3 transition-all hover:text-primary">
                          <Link href={`/blogs/${node.slug}`}>{node.title}</Link>
                        </h1>
                        <p className="text-sm/relaxed tracking-wider text-gray-500">
                          {node?.excerpt?.length > 100
                            ? `${node?.excerpt
                                .replace(/<[^>]*>?/gm, '')
                                .substring(0, 90)}...`
                            : node?.excerpt}

                          <a href="#" className="text-primary">
                            read more
                          </a>
                        </p>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <Image
                            width={20}
                            height={20}
                            alt="auther img"
                            src={node.author.node.avatar.url}
                            className="w-auto h-auto rounded-md"
                          />
                          <div>
                            <h6 className="text-sm transition-all hover:text-primary">
                              {node.author.node.name}
                            </h6>
                            <p className="text-sm text-gray-500">
                              {formatDate(node.date)}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <SubscribeBox />
          </div>

          <div
            className="grid lg:grid-cols-3 gap-6 lg:py-16 py-14 aos-init"
            data-aos="fade-up"
          >
            {multiBlogs && multiBlogs?.length > 0 ? (
              multiBlogs?.map((item: any, index: any) => (
                <Cards1 key={index} item={item} />
              ))
            ) : (
              <div>No data available</div>
            )}
          </div>
          <div className="flex justify-center items-center gap-2">
            <div className="flex items-center">
              <a
                href=""
                className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
              >
                <i className="fa-solid fa-arrow-left me-2"></i> Previous
              </a>
            </div>
            <div className="flex items-center">
              <a
                href=""
                className="border border-gray-300 rounded-md text-sm tracking-wider transition-all duration-150 hover:shadow-lg focus:shadow-lg py-2 px-3"
              >
                Next <i className="fa-solid fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
