import data from "@/pages/api/data.json";
import Link from "next/link";

const ContentTabs = () => {
  return (
    <nav>
      {data.contentTabs.map(({ title, slug }) => (
        <Link href={`/${slug}`} key={slug}>
          {title}
        </Link>
      ))}
    </nav>
  );
};

export default ContentTabs;
