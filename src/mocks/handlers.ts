import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("/src/pages/api/data.json", () => {
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
  }),
];
