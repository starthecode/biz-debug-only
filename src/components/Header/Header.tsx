'use client';

import logo from '@/assets/imgs/logo.png';
import Link from 'next/link';
import {
  XMarkIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/solid';
import { flatListToHierarchical } from '@/utils/flatListToHierarchical';
import Image from 'next/image';
import { Toggle } from './Toggle';
import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { useTheme } from 'next-themes';
import { Search } from '../Search/Search';
import { MobileNav } from './MobileNav';

const Header = ({ menus }: any) => {
  const menuList = flatListToHierarchical(menus?.nodes);
  const [active, setActive] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  const menuHandler = () => {
    console.log('test test');

    setActive(!active);
  };

  const [width, setWidth] = useState(0);
  const [scroll, setScroll] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  const handleSearch = () => {
    showSearch ? setShowSearch(false) : setShowSearch(true);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scroll) {
        setScroll(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scroll]);

  const headerClasses = `rounded-xl relative z-20 transition-all ease-in-out duration-500 ${
    scroll
      ? 'w-[75%] bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950 shadow-lg'
      : 'w-full'
  }`;

  return (
    <>
      <header>
        <div
          className={`relative flex justify-center items-center w-full mt-4 ${
            width < 1024 && active
              ? 'mobile-nav--active inset-0 z-30 fixed'
              : 'large-menu'
          } `}
        >
          <div
            className={`mobile-nav-btns lg:items-center flex lg:justify-start md:justify-between sm:justify-between ${headerClasses} px-4 lg:px-6 lg:xl:px-24`}
          >
            <Link className="2xl:mr-16 xl:mr-16 sm:mr-5 md:mr-5" href="/">
              <Image
                priority={true}
                width="62"
                height="62"
                className="flex object-contain w-auto h-auto"
                src={logo}
                alt="logo"
              />
            </Link>
            {/* Logo End */}
            <div className="flex justify-between lg:w-full items-center">
              <Navbar menuList={menuList} active={active} width={width} />

              <div className="flex relative items-center">
                {/* Menu Open-Close Button */}
                <div className="ml-auto flex">
                  <button
                    onClick={menuHandler}
                    className={`${
                      active && currentTheme === 'dark'
                        ? 'dark:border-slate-500 '
                        : ''
                    } lg:hidden relative z-20 border-onyx-400 dark:border-onyx-700 hover:bg-white/[.15] dark:hover:bg-accent
                focus:bg-white ml-2 flex h-7 w-7 items-center justify-center rounded-full
                border bg-white transition-colors focus:border-slate-400
                 dark:bg-white/[.15]"
                  aria-label="open mobile menu`}
                  >
                    {active ? (
                      <XMarkIcon
                        className={`${
                          active && currentTheme === 'dark'
                            ? 'dark:fill-slate-500 '
                            : ''
                        } fill-slate-500 h-4 w-4 transition-colors`}
                      />
                    ) : (
                      <Bars3Icon
                        className={`fill-slate-500 h-4 w-4 transition-colors hover:fill-flamingo-500 focus:fill-flamingo-500`}
                      />
                    )}
                  </button>
                  {/* Dark-Light Mode */}
                  <Toggle active={active} />
                </div>
                <div className="relative z-20">
                  <button
                    onClick={() => handleSearch()}
                    className="flex ml-2 h-7 w-7 items-center justify-center rounded-full border border-onyx-400 dark:border-onyx-700"
                  >
                    {!showSearch ? (
                      <MagnifyingGlassIcon className="h-4 w-4 fill-flamingo-600 dark:fill-[#00a59a]" />
                    ) : (
                      <XMarkIcon className="h-4 w-4 fill-flamingo-600" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div
              className={`${
                showSearch
                  ? 'opacity-100 bg-[#f7f9fc] dark:bg-gradient-to-t from-onyx-950 to-woodsmoke-950 w-[70%]'
                  : 'opacity-0 bg-transparent w-0'
              } absolute z-10 right-[130px] h-[60px] rounded-xl transition-all ease-out duration-700 border border-woodsmoke-200/10`}
            >
              <Search active={active} width={width} />
            </div>
          </div>
        </div>
        <div
          className={`${
            width < 1024 && active
              ? 'block absolute z-20 inset-0 px-10 py-10'
              : 'hidden'
          } lg:relative h-fit lg:flex bg-[#f7f9fc] dark:bg-gradient-to-t from-onyx-950 to-woodsmoke-950`}
        >
          {/* Mobile Menu */}
          <MobileNav menuList={menuList} />
        </div>
      </header>
    </>
  );
};

export default Header;
