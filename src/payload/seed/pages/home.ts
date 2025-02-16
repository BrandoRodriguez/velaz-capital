import type { RequiredDataFromCollectionSlug } from 'payload'

const home = (locale: 'en' | 'es'): RequiredDataFromCollectionSlug<'pages'> => ({
  slug: 'home',
  slugLock: false,
  _status: 'published',
  hero: {
    type: 'highImpact',
    links: [
      {
        link: {
          type: 'custom',
          variant: 'default',
          label: locale === 'en' ? 'Explore properties' : 'Explorar propiedades',
          url: '/properties',
        },
      },
    ],
    // @ts-ignore
    mediaDesktop: '{{IMAGE_HERO_DESKTOP}}',
    // @ts-ignore
    mediaMobile: '{{IMAGE_HERO_MOBILE}}',
    richText: {
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
                text:
                  locale === 'en'
                    ? 'Invest with confidence'
                    : 'Invierte con confianza',
                version: 1,
              }
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            tag: 'h1',
            version: 1,
          },
          {
            type: 'paragraph',
            children: [
              {
                type: 'text',
                detail: 0,
                format: 0,
                mode: 'normal',
                style: '',
                text:
                  locale === 'en'
                    ? "Invest with confidence and maximize your assets. Velaz Capital, your ideal partner in real estate investments, ensures profitability and security."
                    : 'Invierte con confianza y maximiza tus activos. Velaz Capital, tu socio ideal en inversiones inmobiliarias, te asegura rentabilidad y seguridad.',
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            textFormat: 0,
            version: 1,
          },
        ],
        direction: 'ltr',
        format: '',
        indent: 0,
        version: 1,
      },
    }
  },
  meta: {
    description:
      locale === 'en'
        ? 'Invest with confidence'
        : 'Invierte con confianza',
    // @ts-ignore
    image: '{{IMAGE_HERO_DESKTOP}}',
    title: locale === 'en' ? 'Your ideal partner in real estate investments' : 'Tu socio ideal en inversiones inmobiliarias',
  },
  title: locale === 'en' ? 'Home' : 'Inicio',
})

export default home