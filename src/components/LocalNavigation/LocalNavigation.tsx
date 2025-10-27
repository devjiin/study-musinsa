import data from "@/pages/api/data.json";
import Link from "next/link";

export default function LocalNavigation() {
  return (
    <nav className="">
      <button type="button" aria-label="카테고리 메뉴 열기"></button>
      <ul>
        {data.localNavigation.map((nav, idx) => (
          <li key={idx}>
            <Link href={`/${nav.toLowerCase()}`} className="text-white-rgba">
              {nav}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
