import type { Property, ArchiveBlock as ArchiveBlockProps } from '@/payload-types'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import React from 'react'
import RichText from '@/components/rich-text'

import { CMSLink } from '@/components/ui/link'

import { CollectionArchive } from './_components/collection-archive'

import { TypedLocale } from 'payload'

const ArchiveBlock: React.FC<
  ArchiveBlockProps & {
    id?: string
    locale: TypedLocale
  }
> = async (props) => {
  const {
    id,
    categories,
    introContent,
    limit: limitFromProps,
    populateBy,
    selectedDocs,
    locale,
  } = props

  const limit = limitFromProps || 3

  let properties: Property[] = []

  if (populateBy === 'collection') {
    const payload = await getPayload({ config: configPromise })

    const flattenedCategories = categories?.map((category) => {
      if (typeof category === 'object') return category.id
      else return category
    })

    const fetchedProperties = await payload.find({
      collection: 'properties',
      depth: 1,
      locale,
      limit,
      ...(flattenedCategories && flattenedCategories.length > 0
        ? {
          where: {
            categories: {
              in: flattenedCategories,
            },
          },
        }
        : {}),
    })

    properties = fetchedProperties.docs
  } else {
    if (selectedDocs?.length) {
      const filteredSelectedPosts = selectedDocs.map((post) => {
        if (typeof post.value === 'object') return post.value
      }) as Property[]

      properties = filteredSelectedPosts
    }
  }

  return (
    <section className="archiveBlock relative py-10 md:py-20 max-sm:bg-[#f0e4d5]" id={`block-${id}`}>
      <div className="container mx-auto">
        <div className='flex flex-col justify-center items-center gap-8'>
          {introContent && <RichText className='sm:text-center flex flex-col justify-center sm:items-center img-hidden' content={introContent} enableGutter={false} />}
        </div>
        <CollectionArchive properties={properties} />
      </div>
      <div className='max-sm:hidden absolute top-0 left-0 w-full h-[30rem] lg:h-[50rem] bg-[#f0e4d5] -z-10'>
      </div>
    </section>
  )
}

export default ArchiveBlock