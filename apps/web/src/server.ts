import handler from "@tanstack/react-start/server-entry";

import { paraglideMiddleware } from "@rs-stack/i18n/server";

export default {
  async fetch(req: Request): Promise<Response> {
    try {
      const response = await paraglideMiddleware(req, () => handler.fetch(req));
      return response;
    } catch (error) {
      throw error;
    }
  }
};
