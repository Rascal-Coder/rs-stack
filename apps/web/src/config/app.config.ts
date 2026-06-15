import { baseLocale, locales } from "@rs-stack/i18n/runtime";

export const appConfig = Object.freeze({
  i18n: {
    baseLocale,
    cookieName: "LOCALE",
    locales
  },
  site: {
    author: "Rascal-Coder",
    description:
      "An opinionated Vite Plus (Vite+) monorepo featuring TanStack Start, Paraglide.js (i18n), Hono, oRPC, drizzle-orm, better-auth, and more.",
    jurisdictionCountry: "the Republic of the Philippines",
    longName: "Batteries-Included TanStack Start Monorepo Boilerplate Template | RS-Stack",
    serverLocation: "Hong Kong",
    shortName: "RS-Stack"
  }
});
