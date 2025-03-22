import React, { cache } from 'react'

//metadata
import type { Metadata } from 'next'
import { generateMeta } from '@/utils/generateMeta'

//next
import { draftMode } from 'next/headers'

//types
import type { Page as PageType } from '@/payload-types'
import { TypedLocale } from 'payload'


//payload
import configPromise from '@payload-config'
import { getPayload } from 'payload'

//blocks
import RenderHero from './_components/heros/RenderHero'
import RenderBlocks from './_components/blocks/RenderBlocks'

//ui
import { Button } from '@/components/ui/button'

import { PayloadRedirects } from '@/payload/components/payload-redirects'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  const params = pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => {
      return { slug }
    })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
    locale: TypedLocale
  }>
}




export default async function Page({ params: paramsPromise }: Args) {

  const { slug = 'home', locale = 'en' } = await paramsPromise

  const url = '/' + slug

  let page: PageType | null

  page = await queryPage({
    slug,
    locale,
  })

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <main>

      {/* Allows redirects for valid pages too */}
      {/* <PayloadRedirects disableNotFound url={url} /> */}

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout ?? []} locale={locale} />
    </main>
  )
}

export async function generateMetadata({ params: paramsPromise }): Promise<Metadata> {
  const { slug = 'home', locale = 'en' } = await paramsPromise
  const page = await queryPage({
    slug,
    locale,
  })

  return generateMeta({ doc: page })
}

const queryPage = cache(async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {

  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'pages',
    draft,
    limit: 1,
    locale,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
