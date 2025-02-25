'use client'

//react
import React, { useEffect, useState, useTransition } from 'react'

//types
import type { Header as HeaderType } from '@/payload-types'
import type { Header } from '@/payload-types'

//ui
import { CMSLink } from '@/components/ui/link'

//i18n
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'
import localization from '@/i18n/localization'
import { usePathname, useRouter } from '@/i18n/routing'

//next
import { useParams } from 'next/navigation'

//logo
import Logo from './logo'

//ui
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

//types
import { TypedLocale } from 'payload'
import { useMediaQuery } from '@/hooks/use-media-query'

//utils
import { cn } from '@/utils/cn'


//interface
interface HeaderClientProps {
  header: Header
}

const HeaderClient: React.FC<HeaderClientProps> = ({ header }) => {

  return (
    <header
      className="absolute w-full z-50"
    >
      <div className='relative container mx-auto py-6 sm:py-8'>
        <div className='flex justify-between items-center'>
          <Link href="/">
            <Logo />
          </Link>

          <HeaderNav header={header} className='max-2xl:hidden' />

          <div className='flex gap-2 md:gap-4 items-center'>
            <div className='max-sm:hidden'>
              <LocaleSwitcher />
            </div>
            <HeaderButton header={header} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderClient

function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const [, startTransition] = useTransition()
  const pathname = usePathname()
  const params = useParams()

  function onSelectChange(value: TypedLocale) {
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: value },
      )
    })
  }

  return (
    <Select onValueChange={onSelectChange} value={locale}>
      <SelectTrigger className="w-auto px-0 !text-sm text-white !bg-transparent gap-2 pl-0 md:pl-3 border-none">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        {localization.locales
          .sort((a, b) => a.label.localeCompare(b.label))
          .map((locale) => (
            <SelectItem value={locale.code} key={locale.code}>
              {locale.custom}
            </SelectItem>
          ))}
      </SelectContent>
    </Select>
  )
}


const HeaderNav: React.FC<{ header: HeaderType, className?: string }> = ({ header, className }) => {
  const navItems = header?.navItems || []

  return (
    <nav className={cn("flex gap-8 items-center", className)}>
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink key={i} {...link} />
        )
      })}
    </nav>
  )
}

const HeaderButton: React.FC<{ header: HeaderType }> = ({ header }) => {
  const buttonItems = header?.buttonItems || []

  const sm = useMediaQuery("(max-width: 40rem)");


  return (
    <nav className="flex gap-3 items-center">
      {buttonItems.map(({ link }, i) => {
        return (
          <CMSLink key={i} {...link} size={sm ? 'sm' : 'lg'} />
        )
      })}
    </nav>
  )
}
