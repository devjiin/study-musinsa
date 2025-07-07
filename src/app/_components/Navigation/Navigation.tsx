import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <Link href={"/magazine"}>콘텐츠</Link>
      <Link href={"/recommend"}>추천</Link>
      <Link href={"/ranking"}>랭킹</Link>
      <Link href={"/sale"}>세일</Link>
      <Link href={"/brand"}>브랜드</Link>
      <Link href={"/release"}>발매</Link>
    </nav>
	)
}