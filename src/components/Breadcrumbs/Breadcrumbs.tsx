import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { HiOutlineHome } from 'react-icons/hi';
import { RiArrowRightWideFill } from 'react-icons/ri';

export const Breadcrumbs = ({ props, title, excerpt }: any) => {
  const secondLevel =
    props?.props?.__typename == 'Post' ? 'Blogs' : 'Our Services';

  return (
    <section className={`bg-blueGray-100`}>
      <div className="absolute [mask-image:linear-gradient(to_bottom,transparent,white)] h-96 inset-x-0 opacity-60 rotate-180 text-gray-500/20 top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute h-full inset-0 w-full"
        >
          <defs>
            <pattern
              height="32"
              id="grid-pattern"
              patternTransform="translate(0 -1)"
              patternUnits="userSpaceOnUse"
              width="32"
              x="50%"
              y="100%"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect fill="url(#grid-pattern)" height="100%" width="100%"></rect>
        </svg>
      </div>
      <div
        className={`container relative z-10 ${
          props?.props?.__typename == 'Solution'
            ? 'flex flex-col justify-center items-center text-center'
            : ''
        }`}
      >
        <ul className="flex items-center text-gray-500 text-sm lg:text-sm pb-5 wow animate__animated animate__fadeIn animated">
          <li className="inline-flex items-center">
            <Link href="/" className="flex gap-1 dark:!text-white">
              <HiOutlineHome />
              Home
            </Link>
          </li>
          <li>
            <RiArrowRightWideFill />
          </li>
          <li className="inline-flex items-center">
            <Link href={secondLevel == 'Blogs' ? '/tech-talks' : ''}>
              <span className="text-slate-400">{secondLevel}</span>
            </Link>
          </li>
          <li>
            <RiArrowRightWideFill />
          </li>
          <li className="inline-flex items-center text-flamingo-500">
            <span> {props?.props?.title}</span>
          </li>
        </ul>
      </div>
    </section>
  );
};
