'use client';
import React, { useContext } from 'react';

import PopupContext from './PopupContext';
import { IoIosCloseCircleOutline } from 'react-icons/io';

const Popup = () => {
  const { isOpen, content, closePopup } = useContext(PopupContext);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/90 flex justify-center items-center z-20">
      <span
        className="absolute top-[20px] right-[50px] bg-transparent"
        onClick={closePopup}
      >
        <IoIosCloseCircleOutline color="red" size={20} />
      </span>
      <div className="w-fit relative h-fit ring-ebony-200 dark:ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
        <div className="relative p-4 rounded-3xl border-[1px] border-woodsmoke-300/20 bg-[#f7f9fc] dark:bg-gradient-to-bl from-onyx-800 via-onyx-900 to-onyx-950 z-50">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Popup;
