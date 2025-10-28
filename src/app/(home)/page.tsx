import ContentTabs from "@/components/ContentTabs/ContentTabs";
import { getData } from "../../../notion";
import { Metadata } from "next";

const pageId = "239427665b958058bc76e92c8e27e2df";

export const matadata: Metadata = {
  title: "home",
};

const ItemCardApi = async () => {
  const data = await getData(pageId);

  return <main></main>;
};

export default function Home() {
  return (
    <>
      <ItemCardApi />
      <ContentTabs />
    </>
  );
}
