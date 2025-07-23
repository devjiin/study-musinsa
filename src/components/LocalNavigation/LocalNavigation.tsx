import data from "@/pages/api/data.json";

export default function LocalNavigation() {
  return (
    <nav className="">
      <button type="button" aria-label="카테고리 메뉴 열기"></button>
      {data.localNavigation.map((text, idx) => (
        <button type="button" className="text-[rgba(0,0,0,0.54)]" key={idx}>
          {text}
        </button>
      ))}
    </nav>
  );
}
