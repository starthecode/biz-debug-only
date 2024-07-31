export const Blockquote = ({ testimonials }: any) => {
  return (
    <>
      {testimonials.map((item: any, index: any) => (
        <blockquote
          key={index}
          className="w-full relative ring-ebony-200 dark:ring-white/10 ring-1 p-1 rounded-3xl shadow-2xl shadow-vulcan-950 dark:bg-gradient-to-b dark:from-junglegreen-600 dark:via-onyx-900/10 bg-gradient-to-b from-flamingo-500 via-onyx-900/10"
        >
          <div className="p-4 lg:p-8 rounded-3xl relative group h-full inner-content pt-16 pb-20 border border-ebony-400/30 shadow-lg bg-[#f7f9fc] dark:bg-gradient-to-t from-onyx-950 to-woodsmoke-950">
            <div className="block items-center">
              <h3 className="mt-1 text-lg font-inter font-bold text-[#F4FFFA00] bg-clip-text dark:bg-gradient-to-b dark:from-white dark:to-[#a0a0a0] bg-gradient-to-b from-ebony-400 to-ebony-950">
                {item.testimonialsTitle}
              </h3>
              <span className="font-inter font-medium text-ebony-700 dark:text-[#9ca3af]">
                {item.testimonialsSub}
              </span>
              <p className="line-clamp-2 text-sm font-inter sm:line-clamp-none mt-4 dark:text-slate-300 text-ebony-700 pt-3 border-t border-flamingo-400/40 dark:border-junglegreen-400/40">
                {item.testimonialsDesc?.length > 100
                  ? `${item.testimonialsDesc.substring(0, 115)}...`
                  : item.testimonialsDesc}
              </p>
            </div>
          </div>
        </blockquote>
      ))}
    </>
  );
};
