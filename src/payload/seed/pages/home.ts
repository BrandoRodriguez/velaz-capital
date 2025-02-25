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
          color: 'primary',
          label: locale === 'en' ? 'Explore properties' : 'Explorar propiedades',
          url: '/',
        },
      },
    ],
    images: [
      {
        label: 'Mobile',
        // @ts-ignore
        media: '{{IMAGE_HERO_DESKTOP}}',
      },
      {
        label: 'Desktop',
        // @ts-ignore
        media: '{{IMAGE_HERO_MOBILE}}',
      },
    ],
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
  layout: [
    {
      blockType: 'formBlock',
      blockName: 'formBlock',
      enableIntro: true,
      //@ts-ignore
      form: ['{{CONTACT_FORM_ONE_ID}}', '{{CONTACT_FORM_TWO_ID}}'],
      introContent: {
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
                      ? 'We are here to help you'
                      : 'Estamos aquí para ayudarte',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h4',
              version: 1,
            },
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
                      ? 'Contact us and we will provide you with the best solution for your needs'
                      : '!Contáctanos y te aportaremos la mejor solución a tus necesidades',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h2',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      images: [
        {
          label: 'Mobile',
          // @ts-ignore
          media: '{{IMAGE_FORM_DESKTOP}}',
        },
        {
          label: 'Desktop',
          // @ts-ignore
          media: '{{IMAGE_FORM_MOBILE}}',
        }
      ],
    },
  ],
  meta: {
    description:
      locale === 'en'
        ? 'Invest with confidence and maximize your assets. Velaz Capital, your ideal partner in real estate investments, ensures profitability and security.'
        : 'Invierte con confianza y maximiza tus activos. Velaz Capital, tu socio ideal en inversiones inmobiliarias, te asegura rentabilidad y seguridad.',
    // @ts-ignore
    image: '{{IMAGE_HERO_DESKTOP}}',
    title: locale === 'en' ? 'Invest with confidence' : 'Invierte con confianza',
  },
  title: locale === 'en' ? 'Home' : 'Inicio',
})

export default home