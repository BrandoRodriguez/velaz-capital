'use client'
import { cn } from '@/utils/cn'
import useClickableCard from '@/utils/useClickableCard'
import Link from 'next/link'
import React, { Fragment } from 'react'

import type { Property } from '@/payload-types'

import { Media } from '@/components/ui/media'

export const Card: React.FC<{
  alignItems?: 'center'
  className?: string
  doc?: Property
  relationTo?: 'properties'
  showCategories?: boolean
  title?: string
}> = (props) => {
  const { card, link } = useClickableCard({})
  const { className, doc, relationTo, showCategories, title: titleFromProps } = props

  const { slug, categories, meta, title } = doc || {}
  const { description, image: metaImage } = meta || {}

  const hasCategories = categories && Array.isArray(categories) && categories.length > 0
  const titleToUse = titleFromProps || title
  const sanitizedDescription = description?.replace(/\s/g, ' ') // replace non-breaking space with white space
  const href = `/${relationTo}/${slug}`

  //
  return (
    <article
      className={cn(
        'overflow-hidden hover:cursor-pointer',
        className,
      )}
      ref={card.ref}
    >
      <div className="relative w-full">
        {metaImage && typeof metaImage !== 'string' && <Media resource={metaImage} fill className='relative h-0 pb-[130%] lg:pb-[151.28%] cover' />}
      </div>
      <div className="flex flex-col gap-4 mt-4 md:pt-6">
        <h3 className="font-marcellus md:text-center text-3xl lg:text-4xl">
          {titleToUse}
        </h3>
        <p className='font-dm-sans md:text-center !text-base'>{sanitizedDescription}</p>
        <Link className="not-prose font-marcellus text-base md:text-lg md:text-center underline underline-offset-4"
          style={{
            textDecorationColor: "#EED26E"
          }}
          href={href} ref={link.ref}>
          Ver Detalles
        </Link>
      </div>
    </article>
  )
}
