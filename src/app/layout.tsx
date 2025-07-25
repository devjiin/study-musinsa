import LocalNavigation from "@/components/LocalNavigation/LocalNavigation";
import "./global.css";

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
