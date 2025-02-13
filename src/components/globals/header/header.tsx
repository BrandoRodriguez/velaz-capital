import HeaderClient from './header.client'
import { getCachedGlobal } from '@/utilities'
import React from 'react'

import type { Header } from '@/payload-types'
import { TypedLocale } from 'payload'

export async function Header({ locale }: { locale: TypedLocale }) {

  const header: Header = await getCachedGlobal('header', 1, locale)()

  return <HeaderClient header={header} />
}
