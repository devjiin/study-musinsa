//mocks/handler.js
import { rest } from "msw";

export const handler = [
  rest.get("/api/data", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.delay(100),
      ctx.json({
        data: [
          {
            id: 1,
            name: "김**",
            age: 24,
          },
          {
            id: 2,
            name: "박**",
            age: 18,
          },
        ],
      })
    );
  }),
];
