import { createCsrfMiddleware, createStart } from "@tanstack/react-start";

export const startInstance = createStart(() => {
  return {
    // for API routes
    requestMiddleware: [
      createCsrfMiddleware({
        filter: (ctx) => ctx.handlerType === "serverFn"
      })
    ]
  };
});
