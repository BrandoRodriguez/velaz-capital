import type { Property } from '@/payload-types'

export const property2: Partial<Property> = {
  slug: 'exclusive-luxury-apartment-in-the-vibrant-heart-of-malasana',
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
    image: '{{IMAGE_PROPERTY_2}}',
    title: 'Exclusive luxury apartment in the vibrant heart of Malasaña',
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Exclusive luxury apartment in the vibrant heart of Malasaña',
}

export const property2_es: Partial<Property> = {
  slug: 'exclusivo-piso-de-lujo-en-el-vibrante-corazon-de-malasana',
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
    image: '{{IMAGE_PROPERTY_2}}',
    title: 'Exclusivo piso de lujo en el vibrante corazón de Malasaña',
  },
  relatedPosts: [], // this is populated by the seed script
  title: 'Exclusivo piso de lujo en el vibrante corazón de Malasaña',
}
