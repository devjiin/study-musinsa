"use client";

import { useEffect, useState } from "react";

export const MSWComponent = ({ children }) => {
  const [mswReady, setMswReady] = useState(false);
  useEffect(() => {
    const init = async () => {
      const initMsw = await import("./index").then((res) => console.log(res));
      await initMsw();
      setMswReady(true);
    };

    if (!mswReady) {
      init();
    }
  }, [mswReady]);

  return <>{children}</>;
};
