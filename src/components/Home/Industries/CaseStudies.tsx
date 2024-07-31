import { IconArrow } from '@/components/icons';
import Image from 'next/image';
import Link from 'next/link';

type caseProps = {
  catName: string;
};

const CaseStudies = ({ caseStudies }: any) => {
  const fetchedCaseStudies = caseStudies?.industries?.edges.flatMap(
    (edge: any) => edge.node.caseStudies.nodes
  );

  return (
    <section className="mt-5 relative z-10">
      {fetchedCaseStudies && fetchedCaseStudies.length > 0 ? (
        fetchedCaseStudies?.map((item: any) => (
          <div
            className="flex items-center p-2 rounded-lg mb-5 shadow-lg bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950"
            key={item.id}
          >
            {item?.featuredImage?.node?.mediaItemUrl && (
              <Image
                width="150"
                height="150"
                src={item.featuredImage.node.mediaItemUrl}
                className="object-contain w-[100px] h-[100px] xl:w-auto xl:h-auto rounded-lg"
                alt=""
              />
            )}

            <div className="mt-0 ml-2 xl:ml-5 xl:mt-0 lg:w-1/2 lg:mt-0">
              {item?.casestudiescats?.nodes.map((cat: any, index: any) => (
                <p key={index} className="text-sm text-woodsmoke-600">
                  {cat.name}
                </p>
              ))}

              <h1 className="block mt-2 text-sm text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                {item.title?.length > 40
                  ? `${item.title.substring(0, 55)}...`
                  : item.title}
              </h1>

              <Link
                href={item.uri}
                className="flex mt-2 !text-flamingo-400 dark:!text-junglegreen-600 text-sm no-underline hover:text-blue-400"
              >
                View Case Study
                <div className="flex -rotate-45">
                  <IconArrow />
                </div>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </section>
  );
};

export default CaseStudies;
