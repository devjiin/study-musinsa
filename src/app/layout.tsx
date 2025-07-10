import LocalNavigation from "./_components/LocalNavigation/LocalNavigation";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <h1>MUSINSA</h1>
        <LocalNavigation />
        {children}
      </body>
    </html>
  );
}
