import logo from '@/assets/imgs/logo.png';

import Image from 'next/image';

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex w-full h-screen items-center justify-center dark:bg-woodsmoke-950">
      <div className="animation-pulse cursor-pointer h-20 w-20 rounded-full shadow-lg inline-flex items-center justify-center dark:bg-gradient-to-r from-onyx-600/40 to-onyx-500/20">
        <Image
          priority={true}
          width="50"
          height="50"
          className="flex object-contain w-[55px] h-[55px]"
          src={logo}
          alt="logo"
        />
      </div>
    </div>
  );
}
