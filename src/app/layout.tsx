import LocalNavigation from "@/components/LocalNavigation/LocalNavigation";
import "./global.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "무신사 | %s",
    default: "무신사",
  },
  description: "무신사",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1 className="for-a11y">MUSINSA</h1>
        <LocalNavigation />
        {children}
      </body>
    </html>
  );
}
