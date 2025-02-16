import type { ArrayField, Field } from 'payload'

import type { LinkVariants, LinkColors } from './link'

import { deepMerge } from '@/utils'
import { link } from './link'

type LinkGroupType = (options?: {
  variants?: LinkVariants[] | false
  colors?: LinkColors[] | false
  overrides?: Partial<ArrayField>
}) => Field

export const linkGroup: LinkGroupType = ({ variants, colors, overrides = {} } = {}) => {
  const generatedLinkGroup: Field = {
    name: 'links',
    type: 'array',
    localized: true,
    fields: [
      link({
        variants,
        colors,
      }),
    ],
  }

  return deepMerge(generatedLinkGroup, overrides)
}
