'use client';
import React from 'react';
import { HeadingLabel } from './HeadingLabel';
import { motion } from 'framer-motion';

export const Heading3 = ({ small, main, specialTitle, classes, desc }: any) => {
  return (
    <>
      <div>
        {small && <HeadingLabel labelText={small} />}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="mt-3 mb-4 block text-3xl lg:text-4xl xl:text-4xl text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950"
          >
            {main}
          </motion.h1>
          <p className="text-md font-medium text-ebony-700 dark:text-[#9ca3af]">
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};
