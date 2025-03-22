import type { CollectionAfterChangeHook } from 'payload'

import { revalidatePath } from 'next/cache'

import type { Property } from '@/payload-types'

export const revalidateProperty: CollectionAfterChangeHook<Property> = ({
  doc,
  previousDoc,
  req: { payload, i18n },
}) => {
  const locale = i18n.language
  if (doc._status === 'published') {
    const path = `/${locale}/properties/${doc.slug}`

    payload.logger.info(`Revalidating property at path: ${path}`)

    revalidatePath(path)
  }

  // If the property was previously published, we need to revalidate the old path
  if (previousDoc._status === 'published' && doc._status !== 'published') {
    const oldPath = `/${locale}/properties/${previousDoc.slug}`

    payload.logger.info(`Revalidating old property at path: ${oldPath}`)

    revalidatePath(oldPath)
  }

  return doc
}