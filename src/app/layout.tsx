import type { Metadata } from "next";
import { Sen } from "next/font/google";

import { GlobalStyles, StyledComponentsRegistry, ViewWrapper } from '@/lib';

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
        <GlobalStyles />
        <StyledComponentsRegistry>
          <ViewWrapper>
            {children}
          </ViewWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
