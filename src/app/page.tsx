import ContentTabs from "@/components/ContentTabs/ContentTabs";
import { getData } from "../../notion";

const pageId = "239427665b958058bc76e92c8e27e2df";

const ItemCardApi = async () => {
  console.log(pageId);
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
