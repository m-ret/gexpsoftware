'use client';

import dynamic from 'next/dynamic';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Toaster } from 'react-hot-toast';
import ScrollToTop from '@/components/ScrollToTop';
import 'node_modules/react-modal-video/css/modal-video.css';
import '../styles/index.css';

const DynamicContextProvider = dynamic(
  () => import('./providers').then(({ Providers }) => Providers),
  { ssr: false }
);

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-black">
        <DynamicContextProvider>
          <Toaster containerClassName="!z-[99999]" />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </DynamicContextProvider>
      </body>
    </html>
  );
}
