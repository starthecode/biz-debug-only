'use client';
import React, { useState } from 'react';
import CaseStudies from './CaseStudies';
import Image from 'next/image';
import { Heading3 } from '@/components/Headings/Heading3';

const Industries = ({ industries }: any) => {
  const [activeTab, setActiveTab] = useState(0);
  const [catId, setCatId] = useState('manufacturing');
  const [caseStudies, setCaseStudies] = useState([]);

  const handleTabClick = (index: any, catName: string) => {
    setActiveTab(index);
    setCatId(catName);
  };

  React.useEffect(() => {
    const fetchCaseStudies = async () => {
      const query = `
      query PostQuery($slug: [String]) {
        industries(where: {slug: $slug}, first: 3) {
          edges {
            node {
              caseStudies(first: 3) {
                nodes {
                  id
                  title
                  uri
                  featuredImage { node { mediaItemUrl } }
                  casestudiescats(first: 1) { nodes { name } }
                }
              }
            }
          }
        }
      }`;

      try {
        const { data } = await fetch(
          'https://test.experimentalapp.xyz/graphql',
          {
            method: 'POST',
            body: JSON.stringify({
              query: query,
              variables: { slug: catId },
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            next: { revalidate: 5 },
          }
        ).then((res) => res.json());

        setCaseStudies(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCaseStudies();
  }, [catId]);

  return (
    <>
      <section className="relative mt-24 sm:mt-24 md:mt-32 xl:mt-40">
        <div className="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
          <div className="w-full flex justify-center items-center text-center">
            <div className="flex w-[50rem]">
              <Heading3
                small={'WE SERVE MULTIPLE VERTICALS'}
                main={'Experiance our Diversified Industrial Exposure'}
                specialTitle={''}
                classes={'font-inter'}
                desc={
                  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                }
              />{' '}
            </div>
          </div>
          <div className="text-center">
            <div
              role="tablist"
              aria-label="tabs"
              className="relative mx-auto mt-12 flex h-12 w-full
               items-center gap-x-1 overflow-hidden rounded-full border
                bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950 px-[3px] text-gray-600 dark:border-ebony-400/30
               dark:border-opacity-60 dark:text-gray-300 dark:shadow-none sm:w-max"
            >
              {industries.map((item: any, index: any) => (
                <div
                  key={index}
                  className={`tab ${
                    activeTab == index
                      ? 'active tab-indicator h-10 rounded-full shadow-md transition-[left] duration-500 bg-flamingo-500 text-white'
                      : 'text-slate-500'
                  } `}
                  role="tab"
                  tabIndex={index}
                >
                  <button
                    aria-controls={`panel-${index}`}
                    onClick={() => {
                      handleTabClick(index, item.industryTitle);
                    }}
                    className="group w-full items-center tab relative block rounded-full py-2.5 px-4 hover:text-primary dark:hover:text-primaryLight "
                    type="button"
                  >
                    <span className="m-auto block w-max text-sm font-medium tracking-wider font-display font-inter group-hover:text-accent">
                      {item.industryTitle}
                    </span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 ">
            {industries.map((item: any, index: any) =>
              activeTab === index ? (
                <div
                  className="tab flex-1 gap-6 space-y-12 md:flex md:space-y-0"
                  key={index}
                >
                  <div className="relative md:w-1/2">
                    <div className="w-full flex items-center justify-center">
                      <div className="w-fit relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
                        <div className="grid items-center p-4 gap-12 ring-ebony-400 dark:ring-white/10 ring-1 rounded-2xl bg-ebony-200 shadow-massive">
                          <div className="aspect-w-16 aspect-h-9 lg:aspect-none ">
                            <Image
                              alt="Case Study Image"
                              width="300"
                              height="300"
                              className="object-contain rounded-2xl"
                              src={item?.industryImage?.mediaItemUrl}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="-m-4 overflow-hidden p-4 sm:-mx-12 sm:px-12 md:mx-0 md:w-1/2 md:overflow-visible md:px-0">
                    <div className="relative p-5 xl:p-0 md:p-0 bg-white before:absolute before:inset-0 before:scale-x-110 before:border-y before:border-flamingo-400/40 after:absolute after:inset-0 after:scale-y-110 after:border-x after:border-junglegreen-400/40 dark:bg-woodsmoke-900 dark:before:border-flamingo-400/40 dark:after:border-junglegreen-400/40">
                      <div className="relative overflow-clip py-2 h-fit lg:p-2">
                        <div
                          data-target="panel-0"
                          className="transition duration-500 sm:px-5"
                        >
                          <CaseStudies caseStudies={caseStudies} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Industries;
