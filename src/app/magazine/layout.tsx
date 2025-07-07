import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header>임시 서치바</header>
      {children}
    </div>
  );
}