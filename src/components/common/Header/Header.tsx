import Link from "next/link";

export default function Header({}) {
  return (
    <header>
      <h1>
        <Link href="" className="link__musinsa-logo">
          <img
            src="https://image.msscdn.net/display/images/2025/10/22/b3d30284058a4de2b128af581c23e6e5.png"
            alt="무신사로고"
          />
        </Link>
      </h1>
    </header>
  );
}
