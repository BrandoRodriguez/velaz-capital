// import React from 'react'
// import './styles.css'

// export const metadata = {
//   description: 'A blank template using Payload in a Next.js app.',
//   title: 'Payload Blank Template',
// }

// export default async function RootLayout(props: { children: React.ReactNode }) {
//   const { children } = props

//   return (
//     <html lang="en">
//       <body>
//         <main>{children}</main>
//       </body>
//     </html>
//   )
// }


import type { Metadata } from 'next'

import './globals.css'

import { draftMode } from 'next/headers'
import { TypedLocale } from 'payload'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import localization from '@/i18n/localization'

// import { cn } from 'src/utilities/cn'
import { Marcellus, DM_Sans } from 'next/font/google'
import React from 'react'

// import { AdminBar } from '@/components/AdminBar'
// import { Footer } from '@/globals/Footer/Component'
// import { Header } from '@/globals/Header/Component'
// import { LivePreviewListener } from '@/components/LivePreviewListener'
// import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

//layout
import { Header } from '@/components/globals/header/header'


import { getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'
import { cn } from '@/utils/cn'


type Args = {
  children: React.ReactNode
  params: Promise<{
    locale: TypedLocale
  }>
}

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-marcellus',
})

const dm_sans = DM_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: '--font-dm-sans',
})

export default async function RootLayout({ children, params }: Args) {
  const { locale } = await params
  const currentLocale = localization.locales.find((loc) => loc.code === locale)
  const direction = currentLocale?.rtl ? 'rtl' : 'ltr'

  if (!routing.locales.includes(locale as any)) {
    notFound()
  }
  setRequestLocale(locale)

  const { isEnabled } = await draftMode()
  const messages = await getMessages()

  return (
    <html
      className={cn(marcellus.variable, dm_sans.variable, dm_sans.className)}
      lang={locale}
      dir={direction}
      suppressHydrationWarning
    >
      <head>
        {/* <InitTheme /> */}
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          {/* <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          /> */}
          {/* <LivePreviewListener /> */}
          {/* <Header locale={locale} /> */}
          {children}
          {/* <Footer locale={locale} /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

// export const metadata: Metadata = {
//   metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || ''),
//   openGraph: mergeOpenGraph(),
//   twitter: {
//     card: 'summary_large_image',
//     creator: '@brandorodriguez',
//   },
// }

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }))
// }
