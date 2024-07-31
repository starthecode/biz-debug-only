import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Cards1({ item }: any) {
  return (
    <div>
      <Image
        width={300}
        height={300}
        alt="blog post img"
        src={
          item?.featuredImage?.node?.mediaItemUrl
            ? item?.featuredImage?.node?.mediaItemUrl
            : '/images/dummy-img-bizmetric.webp'
        }
        className="w-auto h-auto rounded-md mb-5"
      />

      {item.categories &&
        item.categories.nodes.map((item: any) => (
          <Link
            key={item.name}
            className="bg-teal-500/10 text-teal-500 font-medium rounded-md text-xs py-1 px-2 mr-2"
            href="#"
          >
            {' '}
            {item.name}
          </Link>
        ))}

      <h1 className="text-lg my-3 transition-all hover:text-primary">
        {item.title}
      </h1>
      <p className="text-sm/relaxed tracking-wider text-gray-500">
        {item?.excerpt?.length > 100
          ? `${item.excerpt.replace(/<[^>]*>?/gm, '').substring(0, 90)}...`
          : item.excerpt}

        <Link
          href={item?.uri ? item?.uri : item?.slug}
          className="text-primary"
        >
          read more
        </Link>
      </p>
    </div>
  );
}
