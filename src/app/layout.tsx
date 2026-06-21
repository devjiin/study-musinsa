import Gnb from "@/components/common/Gnb/Gnb";
import "./global.css";
import { Metadata } from "next";
import Header from "@/components/common/Header/Header";

export const metadata: Metadata = {
  title: {
    template: "무신사 | %s",
    default: "무신사",
  },
  description: "무신사",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Gnb />
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
