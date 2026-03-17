// <reference types"vite/client" />

import {createRootRoute, HeadContent, Scripts} from "@tanstack/react-router";
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
import {NotFound} from "~/components/NotFound";
import {DefaultCatchBoundary} from "~/components/DefaultCatchBoundary";
import {seo} from "~/utils/seo";
import appCss from '~/styles/app.css?url';

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      ...seo({
        title: 'NanoUI, make your application stand out!',
        description: 'NanoUI is a UI library used for building modern web applications.',
        keywords: 'React, UI Library, web application, monospace',
      })
    ],
    links: [{
      rel: 'stylesheet',
      href: appCss
    }],
    scripts: []
  }),
  errorComponent: DefaultCatchBoundary,
  notFoundComponent: () => <NotFound />,
  shellComponent: RootDocument
})

function RootDocument({children}: {children: React.ReactNode}) {
  return (
    <html className='dark'>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <TanStackRouterDevtools position={"bottom-right"}/>
        <Scripts />
      </body>
    </html>
  )
}
