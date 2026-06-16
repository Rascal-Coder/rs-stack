import geistMonoCyrillic from "@fontsource-variable/geist-mono/files/geist-mono-cyrillic-wght-normal.woff2?url";
import geistMonoLatinExt from "@fontsource-variable/geist-mono/files/geist-mono-latin-ext-wght-normal.woff2?url";
import geistMonoLatin from "@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2?url";
import geistVariableCyrillic from "@fontsource-variable/geist/files/geist-cyrillic-wght-normal.woff2?url";
import geistVariableLatinExt from "@fontsource-variable/geist/files/geist-latin-ext-wght-normal.woff2?url";
import geistVariableLatin from "@fontsource-variable/geist/files/geist-latin-wght-normal.woff2?url";
import instrumentSerifLatin400 from "@fontsource/instrument-serif/files/instrument-serif-latin-400-normal.woff2?url";
import { a11yDevtoolsPlugin } from "@tanstack/devtools-a11y/react";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { formDevtoolsPlugin } from "@tanstack/react-form-devtools";
import { type QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";
import { HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";

import { getLocale } from "@rs-stack/i18n/runtime";
import { Toaster } from "@rs-stack/ui/components/sonner";

import { ProgressProvider } from "@/shared/providers/progress.provider";
import appCss from "@/shared/styles/app.css?url";

import { DefaultErrorPage } from "@/pages/default-error";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  errorComponent: DefaultErrorPage,
  shellComponent: RootDocument,
  head: () => {
    const faviconHref = "/favicon.ico";

    return {
      links: [
        {
          href: faviconHref,
          rel: "icon"
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: instrumentSerifLatin400,
          crossOrigin: "anonymous"
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: geistVariableLatin,
          crossOrigin: "anonymous"
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: geistVariableLatinExt,
          crossOrigin: "anonymous"
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: geistVariableCyrillic,
          crossOrigin: "anonymous"
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: geistMonoLatin,
          crossOrigin: "anonymous"
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: geistMonoLatinExt,
          crossOrigin: "anonymous"
        },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: geistMonoCyrillic,
          crossOrigin: "anonymous"
        },
        { href: appCss, rel: "stylesheet" }
      ]
    };
  }
});

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning lang={getLocale()}>
      <head>
        <HeadContent />
      </head>
      <body>
        <ProgressProvider>
          {children}

          <Toaster richColors />
          <TanStackDevtools
            plugins={[
              {
                name: "TanStack Query",
                render: <ReactQueryDevtoolsPanel />
              },
              {
                name: "TanStack Router",
                render: <TanStackRouterDevtoolsPanel />
              },
              formDevtoolsPlugin(),
              a11yDevtoolsPlugin()
            ]}
          />
          <Scripts />
        </ProgressProvider>
      </body>
    </html>
  );
}
