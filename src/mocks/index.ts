const initMockAPI = async (): Promise<void> => {
  if (typeof window === "undefined") {
    console.log("iffi");
    const { server } = await import("./server");
    server.listen();
  } else {
    console.log("else");
    const { worker } = await import("./browser");
    worker.start();
  }
};

export default initMockAPI;
