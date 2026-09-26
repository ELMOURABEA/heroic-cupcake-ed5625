import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/Header'

import '../styles.css'

const siteName = 'MosTa-TecH'
const siteDescription =
  'MosTa-TecH is the enterprise home for Mosta-Pharm, EL-DocToOoR, MeGaOcToOoN, Eco-StorM and the wider product ecosystem, including the El-Bendary Pharmacies platform.'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: siteName,
      },
      {
        name: 'description',
        content: siteDescription,
      },
      {
        property: 'og:title',
        content: siteName,
      },
      {
        property: 'og:description',
        content: siteDescription,
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <Header />
        {children}
        <footer className="border-t border-black/10 mt-24">
          <div className="max-w-7xl mx-auto px-5 py-8 text-sm text-[#52514e] flex flex-col md:flex-row items-center justify-between gap-2">
            <span>&copy; {new Date().getFullYear()} MosTa-TecH. All rights reserved.</span>
            <span>Mosta-Pharm &middot; EL-DocToOoR &middot; MeGaOcToOoN &middot; Eco-StorM &middot; OctoGen &middot; SoLAGeN &middot; MosTa-PiKa</span>
          </div>
        </footer>
        <Scripts />
      </body>
    </html>
  )
}
