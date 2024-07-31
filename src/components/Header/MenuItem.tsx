import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const MenuItemVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,

    transition: {
      staggerChildren: 0.05,
    },
  },
};

const MenuItem = ({ item, children, ...props }: any) => {
  const [isBeingHovered, setIsBeingHovered] = useState(false);

  return (
    <motion.div
      className="px-5 relative cursor-pointer py-8"
      onHoverStart={() => setIsBeingHovered(true)}
      onHoverEnd={() => setIsBeingHovered(false)}
    >
      <Link
        href={item?.url}
        className={`${
          item?.url == '#' && 'pointer-events-none'
        } relative sm:text-sm md:text-md 2xl:text-lg font-bold bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950 dark:hover:text-flamingo-400 hover:text-flamingo-400`}
      >
        {item.title}
      </Link>
      {item?.children.length > 0 && isBeingHovered && (
        <div className="relative min-w-max top-5">
          <motion.div
            {...props}
            layoutId="menu"
            className="absolute shadow-lg bg-white dark:bg-woodsmoke-950/95 rounded-lg -left-2/4"
            variants={MenuItemVariants}
            style={{ minWidth: 400 }}
            initial="hidden"
            animate="visible"
          >
            {children}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};

export default MenuItem;
