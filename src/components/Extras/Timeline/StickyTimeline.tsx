'use client';
import React from 'react';
import Image from 'next/image';
import { StickyScroll } from './StickyScroll';
import { Heading2 } from '@/components/Headings/Heading2';

// const content = [
//   {
//     date: '2011',
//     title: 'Collaborative Editing',
//     description:
//       'Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.',
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Collaborative Editing
//       </div>
//     ),
//   },
//   {
//     date: '2012',
//     title: 'Real time changes',
//     description:
//       'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
//     content: (
//       <div className="h-full w-full  flex items-center justify-center text-white">
//         <Image
//           src="/linear.webp"
//           width={300}
//           height={300}
//           className="h-full w-full object-cover"
//           alt="linear board demo"
//         />
//       </div>
//     ),
//   },
//   {
//     date: '2013',
//     title: 'Version control',
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
//         Version control
//       </div>
//     ),
//   },
//   {
//     date: '2014',
//     title: 'Running out of content',
//     description:
//       "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
//     content: (
//       <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
//         Running out of content
//       </div>
//     ),
//   },
// ];
export function StickyTimeline({ timelineData }: any) {
  return (
    <div className="p-10">
      <div className="flex flex-col justify-center text-center mb-14">
        <Heading2
          small={timelineData?.timelineSmallTitle}
          main={timelineData?.timelineTitle}
          desc={timelineData?.timelineDetails}
        />
      </div>

      <div className="relative z-50 ring-white/10 ring-1 p-2 rounded-3xl bg-gradient-to-t from-onyx-900">
        <div className="grid grid-cols-1 items-center p-8 lg:p-10 gap-12 ring-white/10 ring-1 rounded-2xl bg-card/80 shadow-massive">
          <StickyScroll content={timelineData.timelineListItems} />
        </div>
      </div>
    </div>
  );
}
