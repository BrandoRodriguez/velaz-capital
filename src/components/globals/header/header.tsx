import React from 'react'

//client
import HeaderClient from './header.client'

//utils
import { getCachedGlobal } from '@/utils'

//types
import type { Header } from '@/payload-types'
import { TypedLocale } from 'payload'

export async function Header({ locale }: { locale: TypedLocale }) {

  const header: Header = await getCachedGlobal('header', 1, locale)()

  return <HeaderClient header={header} />
}
