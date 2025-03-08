import type { Property } from '@/payload-types'

export const property3: Partial<Property> = {
  slug: 'light-and-space-in-the-best-area-of-madrid',
  slugLock: false,
  _status: 'published',
  // @ts-ignore
  authors: ['{{AUTHOR}}'],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Dive into the marvels of modern innovation, where the only constant is change. A journey where pixels and data converge to craft the future.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },

  meta: {
    description:
      'A playground for the over-and-underwater world adventurers. Surfing, diving, snorkeling, fishing, sailing, nature trails & villages to explore.',
    // @ts-ignore
    image: '{{IMAGE_PROPERTY_3}}',
    title: 'Light and space in the best area of ​​Madrid',
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Light and space in the best area of ​​Madrid',
}

export const property3_es: Partial<Property> = {
  slug: 'luz-y-espacio-en-la-mejor-zona-de-madrid',
  slugLock: false,
  _status: 'published',
  // @ts-ignore
  authors: ['{{AUTHOR}}'],
  content: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text: 'Sumérgete en las maravillas de la innovación moderna, donde la única constante es el cambio. Un viaje donde los píxeles y los datos convergen para crear el futuro.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h2',
          version: 1,
        }
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  meta: {
    description:
      'A playground for the over-and-underwater world adventurers. Surfing, diving, snorkeling, fishing, sailing, nature trails & villages to explore.',
    // @ts-ignore
    image: '{{IMAGE_PROPERTY_3}}',
    title: 'Luz y espacio en la mejor zona de Madrid',
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Luz y espacio en la mejor zona de Madrid',
}
