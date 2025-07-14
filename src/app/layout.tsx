import LocalNavigation from "@/components/LocalNavigation/LocalNavigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="__next">
          <h1>MUSINSA</h1>
          <LocalNavigation />
          {children}
        </div>
      </body>
    </html>
  );
}
