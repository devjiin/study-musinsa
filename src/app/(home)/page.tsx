import ContentTabs from "@/components/ContentTabs/ContentTabs";
import { getData } from "../../../notion";
import { Metadata } from "next";

const pageId = process.env.NOTION_DATABASE_ID;

export const metadata: Metadata = {
  title: "home",
};

const ItemCardApi = async () => {
  const data = await getData(pageId);
  console.log(data);

  return <main></main>;
};

export default function Home() {
  return (
    <>
      <ContentTabs />
      <ItemCardApi />
    </>
  );
}
