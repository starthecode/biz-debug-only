import type { Metadata } from 'next';
import '../styles/globals.scss';
import { UseMousePosition } from '@/components/UseMousePosition';
import { PollBase } from '@/components/Poll/PollBase';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';
import { Footer } from '@/components/Footer/Footer';
import HeaderServer from '@/components/Header/HeaderServer';
import { Suspense } from 'react';
import Loading from './loading';
import { PatternGrid } from '@/components/PatternGrid';
import { Glow2 } from '@/components/GlowLights';
import { PopupProvider } from '@/components/Extras/Popups/PopupContext';
import Popup from '@/components/Extras/Popups/Popup';

export const metadata: Metadata = {
  title: 'Bizmetric',
  description: 'Generated by create next 14',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased transition-colors duration-500">
        <ThemeProvider attribute="class">
          <Suspense fallback={<Loading />}>
            <UseMousePosition />
            <Toaster position="top-center" />
            <PollBase />
            <PopupProvider>
              <main className="antialiased transition-colors duration-500 dark:dark-gradiant relative w-full h-auto overflow-hidden">
                <PatternGrid />
                <HeaderServer />
                {children}
                <Popup />
                <Glow2 />
                <Footer />
              </main>
            </PopupProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
