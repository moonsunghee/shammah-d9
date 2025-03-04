import type { Metadata } from "next";
import "./globals.scss";
import GlobalHeader from "./components/GlobalHeader";
import GlobalFooter from "./components/GlobalFooter";


export const metadata: Metadata = {
  title: "Shammah Design Service",
  description: "디자이너와 개발자를 구독하세요.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <GlobalHeader/>
        
        {children}
        
        <GlobalFooter/>
      </body>
    </html>
  );
}
