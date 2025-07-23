import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(
    "https://api.notion.com/v1/databases/239427665b958058bc76e92c8e27e2df/query",
    () => {
      return HttpResponse.json([
        {
          id: 1,
          title: "콘텐츠",
          slug: "magazine",
        },
        {
          id: 2,
          title: "추천",
          slug: "recommend",
        },
        {
          id: 3,
          title: "랭킹",
          slug: "ranking",
        },
      ]);
    }
  ),
];
