'use client'

//react
import React, { useEffect, useState, useTransition } from 'react'

//types
import type { Header as HeaderType } from '@/payload-types'
import type { Header } from '@/payload-types'


//i18n
import { useTranslations } from 'next-intl'

//ui
import { CMSLink } from '@/components/ui/link'





// import { Logo } from '@/components/Logo/Logo'
// import { HeaderNav } from './Nav'
import { useLocale } from 'next-intl'
import localization from '@/i18n/localization'
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from '@/components/ui/select'
import { TypedLocale } from 'payload'
import { usePathname, useRouter } from '@/i18n/routing'

interface HeaderClientProps {
  header: Header
}

const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {

  console.log(header, "header")
  return (
    <header
      className="container"
    >
      {/* <Link href="/" className="me-auto">
        <Logo />
      </Link>
      <LocaleSwitcher /> */}
      <HeaderNav header={header} />
    </header>
  )
}

export default HeaderClient

// function LocaleSwitcher() {
//   // inspired by https://github.com/amannn/next-intl/blob/main/examples/example-app-router/src/components/LocaleSwitcherSelect.tsx
//   const locale = useLocale()
//   const router = useRouter()
//   const [, startTransition] = useTransition()
//   const pathname = usePathname()
//   const params = useParams()

//   function onSelectChange(value: TypedLocale) {
//     startTransition(() => {
//       router.replace(
//         // @ts-expect-error -- TypeScript will validate that only known `params`
//         // are used in combination with a given `pathname`. Since the two will
//         // always match for the current route, we can skip runtime checks.
//         { pathname, params },
//         { locale: value },
//       )
//     })
//   }

//   return (
//     <Select onValueChange={onSelectChange} value={locale}>
//       <SelectTrigger className="w-auto text-sm bg-transparent gap-2 pl-0 md:pl-3 border-none">
//         <SelectValue placeholder="Theme" />
//       </SelectTrigger>
//       <SelectContent>
//         {localization.locales
//           .sort((a, b) => a.label.localeCompare(b.label)) // Ordenar por label
//           .map((locale) => (
//             <SelectItem value={locale.code} key={locale.code}>
//               {locale.label}
//             </SelectItem>
//           ))}
//       </SelectContent>
//     </Select>
//   )
// }


export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const t = useTranslations()

  return (
    <nav className="flex gap-3 items-center">
      {/* {navItems.map(({ link }, i) => {
        return (
          <CMSLink key={i} {...link} appearance="link" />
        )
      })} */}
    </nav>
  )
}
