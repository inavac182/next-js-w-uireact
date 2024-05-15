import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { GlobalStyles, StyledComponentsRegistry, ViewWrapper } from '@/lib';

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
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
