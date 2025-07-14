import React from "react";
import ReactDOM from "react-dom";
import initMockAPI from "./mocks";
import RootLayout from "./app/layout";

async function enableMocking() {
  if (process.env.NODE_ENV == "development") {
    console.log("ddd");
    initMockAPI();
  }
}

enableMocking().then(() => {
  // ReactDOM.render(<RootLayout />, document.getElementById("__next"));
});
