import data from "@/pages/api/data.json";
import Link from "next/link";

export default function Gnb() {
  return (
    <nav className="box__gnb-area flex bg-[#1a1b1f]">
      <Link href={`/menu/category`} aria-label="카테고리 메뉴 열기">
        <span className="image__catefory-ico">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 8.70005H8V7.30005H4V8.70005ZM4 15.2H8V13.8H4V15.2ZM4 21.7H8V20.3H4V21.7ZM10 8.70005H24V7.30005H10V8.70005ZM10 15.2H24V13.8H10V15.2ZM10 21.7H24V20.3H10V21.7Z"
              fill="currentColor"
              fillOpacity="0.8"
            ></path>
          </svg>
        </span>
      </Link>
      <ul className="list__gnb-navigation flex h-14">
        {data.gnb.map((nav, idx) => (
          <li key={idx}>
            <Link href={`/${nav.toLowerCase()}`} className="px-[8px] text-white-rgba text-sm">
              {nav}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
