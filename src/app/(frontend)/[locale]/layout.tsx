import React from 'react'

//metadata
import type { Metadata } from 'next'

//styles
import './globals.css'

//next
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'

//types
import { TypedLocale } from 'payload'

//i18n
import { routing } from '@/i18n/routing'
import localization from '@/i18n/localization'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { NextIntlClientProvider } from 'next-intl'

//fonts
import { Marcellus, DM_Sans } from 'next/font/google'

//utils
import { mergeOpenGraph } from '@/utils/mergeOpenGraph'
import { cn } from '@/utils/cn'

//layout
import { Header } from '@/components/globals/header/header'


// import { AdminBar } from '@/components/AdminBar'
// import { LivePreviewListener } from '@/components/LivePreviewListener'


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
          <Header locale={locale} />
          {children}
          {/* <Footer locale={locale} /> */}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SERVER_URL || ''),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: '@brandorodriguez',
  },
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}
