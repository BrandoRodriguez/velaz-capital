//metadata
import type { Metadata } from 'next'
import { generateMeta } from '@/utils/generateMeta'

// import { RelatedPosts } from '@/blocks/RelatedPosts/Component'
// import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
// import RichText from '@/components/RichText'

import type { Property } from '@/payload-types'

// import { PostHero } from '@/heros/PostHero'
// import { generateMeta } from '@/utilities/generateMeta'
import { TypedLocale } from 'payload'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const properties = await payload.find({
    collection: 'properties',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  const params = properties.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
    locale?: TypedLocale
  }>
}

export default async function Property({ params: paramsPromise }: Args) {
  const { slug = '', locale = 'en' } = await paramsPromise
  const url = '/properties/' + slug
  const property = await queryProperty({ slug, locale })

  // if (!post) return <PayloadRedirects url={url} />

  return (
    <article className="pt-16 pb-16">
      {/* <PageClient />

      <PayloadRedirects disableNotFound url={url} />

      <PostHero post={post} />

      <div className="flex flex-col items-center gap-4 pt-8">
        <div className="container lg:mx-0 lg:grid lg:grid-cols-[1fr_48rem_1fr] grid-rows-[1fr]">
          <RichText
            className="lg:grid lg:grid-cols-subgrid col-start-1 col-span-3 grid-rows-[1fr]"
            content={post.content}
            enableGutter={false}
          />
        </div>

        {post.relatedPosts && post.relatedPosts.length > 0 && (
          <RelatedPosts
            className="mt-12"
            docs={post.relatedPosts.filter((post) => typeof post === 'object')}
          />
        )}
      </div> */}
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', locale = 'en' } = await paramsPromise
  const property = await queryProperty({ slug, locale })

  // @ts-ignore
  return generateMeta({ doc: property })
}

const queryProperty = cache(async ({ slug, locale }: { slug: string; locale: TypedLocale }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'properties',
    draft,
    limit: 1,
    overrideAccess: draft,
    locale,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
