// import ContentTabs from "@/components/ContentTabs/ContentTabs";
import initMockAPI from "mocks";

if (process.env.NODE_ENV === "development") {
  initMockAPI();
}

export default function Home() {
  return (
    <>
      {/* <ContentTabs /> */}
      <h1>Hello, Next.js!</h1>
    </>
  );
}
