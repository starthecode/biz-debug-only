import Image from 'next/image';
import { format } from 'date-fns';
import Link from 'next/link';

export const Article = ({ blogsData }: any) => {
  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return format(date, 'd MMM yy');
  };

  return (
    <>
      <div className="container block xl:flex md:flex gap-[30px] md:grid-cols-2 gap-y-[60px] lg:grid-cols-2">
        <div className="relative mx-0 xl:mx-5 w-full lg:ml-2 lg:mr-[30px] xl:w-[900px]">
          <div className="w-full relative ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl  bg-transparent">
            <div className="rounded-3xl p-0 flex items-center border border-ebony-400/30 shadow-lg bg-[#f7f9fc] dark:bg-gradient-to-t from-onyx-900 to-woodsmoke-950/90 z-10 relative flex-col lg:gap-[50px] lg:flex-row">
              <Link
                className="block self-stretch flex-1 aspect-[680/421]"
                href="#"
              >
                <Image
                  width="400"
                  height="400"
                  quality="100"
                  className="h-full w-full object-cover rounded-3xl lg:rounded-tr-none lg:rounded-br-2xl"
                  src={
                    blogsData?.homeBlogSectionWide?.featuredImage?.node
                      ?.mediaItemUrl
                  }
                  alt="Bizmetric blog"
                />
              </Link>
              <div className="flex-1">
                <div className="px-10 py-10 md:px-10 xl:px-0">
                  <div className="flex items-center mb-3">
                    <span className="text-sm text-flamingo-500 dark:text-junglegreen-600">
                      {
                        blogsData?.homeBlogSectionWide?.categories?.nodes[0]
                          ?.name
                      }
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950 mb-3">
                    {' '}
                    {blogsData?.homeBlogSectionWide?.title}
                  </h2>
                  <p className="text-md font-medium text-ebony-700 dark:text-[#9ca3af] mb-5">
                    {blogsData?.homeBlogSectionWide?.excerpt?.length > 100
                      ? `${blogsData?.homeBlogSectionWide?.excerpt.substring(
                          0,
                          200
                        )}...`
                      : blogsData?.homeBlogSectionWide?.excerpt}
                  </p>
                  <div className="flex items-center gap-[15px]">
                    <div>
                      <p className="text-sm font-bold text-slate-400/90">
                        <time>
                          {formatDate(blogsData?.homeBlogSectionWide?.date)}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-10 xl:mt-0">
          {blogsData?.homeBlogSectionSmall &&
            blogsData?.homeBlogSectionSmall.map((item: any) => (
              <div
                key={item?.id}
                className="flex items-center gap-6 pb-0 border-b border-flamingo-400/30 dark:border-junglegreen-400/30 justify-between cursor-pointer"
              >
                <div className="flex-1">
                  <p className="font-bold text-[14px] md:text-heading-6 line-clamp-2 mb-[18px]">
                    {item.title}
                  </p>
                  <div className="flex items-center gap-[11px]">
                    <div>
                      <p className="font-bold text-sm">
                        <time>{formatDate(item?.date)}</time>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 max-w-[133px]">
                  <div className="pr-[13px] aspect-square">
                    <Image
                      width="250"
                      height="250"
                      quality="100"
                      className="object-contain rounded-2xl z-10 relative"
                      src={item?.featuredImage?.node?.mediaItemUrl}
                      alt="Bizmetric blog"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
