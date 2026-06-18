import data from "@/pages/api/data.json";
import Link from "next/link";

export default function LocalNavigation() {
  return (
    <nav className="flex bg-[#1a1b1f]">
      <button type="button" aria-label="카테고리 메뉴 열기"></button>
      <ul className="flex h-14">
        {data.localNavigation.map((nav, idx) => (
          <li key={idx}>
            <Link
              href={`/${nav.toLowerCase()}`}
              className="px-[8px] text-white-rgba text-sm"
            >
              {nav}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
