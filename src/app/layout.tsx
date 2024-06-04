import type { Metadata } from "next";
import { Sen } from "next/font/google";

import { ViewWrapper } from '@/lib';
import './global.css';

const sen = Sen({ style: 'normal', subsets: ['latin'], variable: '--font-family' });

export const metadata: Metadata = {
  title: "NextJS w/@UiReact",
  description: "NextJS app with @UiReact library set up",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sen.variable}>
          <ViewWrapper>
            {children}
          </ViewWrapper>
      </body>
    </html>
  );
}
