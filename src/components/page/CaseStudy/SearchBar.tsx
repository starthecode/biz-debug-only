'use client';
import Cards1 from '@/components/Cards/Cards1';
import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export const SearchBar = ({ item }: any) => {
  const searchRef = useRef(null);
  const [query, setQuery] = useState('');
  const [searchActive, setSearchActive] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

  const searchEndPoint = useCallback(
    (query: any) => `${apiDomain}/wp-json/wp/v2/case_studies?search=${query}`,
    [apiDomain]
  );

  const defaultSearchEndPoint = useCallback(
    () => `${apiDomain}/wp-json/wp/v2/case_studies?per_page=6`,
    [apiDomain]
  );

  useEffect(() => {
    // Fetch default search results
    setLoading(true);
    fetch(defaultSearchEndPoint())
      .then((res) => res.json())
      .then((data) => {
        setResults(data);
        setLoading(false);
      });
  }, [defaultSearchEndPoint]);

  const onChange = useCallback((event: any) => {
    setQuery(event.target.value);
  }, []);

  const onFocus = useCallback(() => {
    setSearchActive(true);
    window.addEventListener('click', onClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClick = useCallback((event: any) => {
    //@ts-ignore
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setSearchActive(false);
      window.removeEventListener('click', onClick);
    }
  }, []);

  const onSubmit = useCallback(
    (event: any) => {
      event.preventDefault();

      setLoading(true);
      fetch(searchEndPoint(query))
        .then((res) => res.json())
        .then((data) => {
          setResults(data);
          setLoading(false);
        });
    },
    [query, searchEndPoint]
  );

  return (
    <div className="container pt-5">
      <form
        ref={searchRef}
        onSubmit={onSubmit}
        className="mx-auto w-screen max-w-screen-md relative z-10 flex flex-col justify-between rounded-lg ring-1 ring-white/10 p-2 sm:flex-row sm:items-center sm:p-0"
      >
        <div className="flex">
          <label
            className="focus-within:ring h-14 rounded-md ring-onyx-200"
            htmlFor="category"
          >
            <select
              className="bg-transparent w-fit px-2 py-4 outline-none"
              name="category"
              id="category"
            >
              <option className="text-black" value="All">
                Industry
              </option>
              <option className="text-black" value="All">
                Industry Two
              </option>
              <option className="text-black" value="All">
                Industry Three
              </option>
            </select>
          </label>
          <label
            className="focus-within:ring h-14 rounded-md ring-onyx-200"
            htmlFor="category"
          >
            <select
              className="w-fit bg-transparent px-2 py-4 outline-none"
              name="category"
              id="category"
            >
              <option className="text-black" value="All">
                Technology
              </option>
              <option className="text-black" value="All">
                Industry Two
              </option>
              <option className="text-black" value="All">
                Industry Three
              </option>
            </select>
          </label>
          <input
            id="search"
            autoComplete="off"
            placeholder="Type Something..."
            onChange={onChange}
            onFocus={onFocus}
            value={query}
            type="search"
            className="ml-1 h-14 w-full bg-transparent cursor-text rounded-md border py-4 pl-6 outline-none sm:border-0 sm:pr-40 sm:pl-12"
          />
        </div>
        <button
          type="submit"
          className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-md bg-flamingo-500 px-10 text-center align-middle text-base font-medium normal-case text-white outline-none ring-emerald-200 ring-offset-1 sm:absolute sm:right-0 sm:mt-0 sm:mr-1 sm:w-32 focus:ring"
        >
          Search
        </button>
      </form>

      {loading ? (
        <div className="w-full text-center mt-4">
          <span>Loading...</span>
        </div>
      ) : (
        results.length > 0 && (
          <div className="mt-10 grid lg:grid-cols-3 gap-6 lg:py-16 py-14 aos-init">
            {results.map((item: any) => (
              <div key={item.title}>
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

                <h1 className="text-lg my-3 transition-all hover:text-primary">
                  {item.title.rendered}
                </h1>
                <p className="text-sm/relaxed tracking-wider text-gray-500">
                  {item?.excerpt?.rendered?.length > 100
                    ? `${item.excerpt.rendered
                        .replace(/<[^>]*>?/gm, '')
                        .substring(0, 90)}...`
                    : item.excerpt.rendered}
                </p>
                <Link
                  href={`/case_studies/${item?.slug}`}
                  className="text-primary"
                >
                  read more
                </Link>
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};
