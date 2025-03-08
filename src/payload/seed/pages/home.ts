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
      blockName: 'contentBlock',
      blockType: 'contentBlock',
      type: 'carousel',
      links: [
        {
          link: {
            type: 'custom',
            variant: 'default',
            color: 'primary',
            label: locale === 'en' ? 'Explore properties' : 'Conoce más sobre nosotros',
            url: '/',
          },
        },
      ],
      images: [
        {
          label: 'content 1',
          // @ts-ignore
          media: '{{IMAGE_CAROUSEL_1}}',
        },
        {
          label: 'content 2',
          // @ts-ignore
          media: '{{IMAGE_CAROUSEL_2}}',
        },
        {
          label: 'content 3',
          // @ts-ignore
          media: '{{IMAGE_CAROUSEL_3}}',
        },
        {
          label: 'content 4',
          // @ts-ignore
          media: '{{IMAGE_CAROUSEL_4}}',
        },
        {
          label: 'content 5',
          // @ts-ignore
          media: '{{IMAGE_CAROUSEL_5}}',
        },
        {
          label: 'content 6',
          // @ts-ignore
          media: '{{IMAGE_CAROUSEL_6}}',
        }
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
                      ? 'Who we are'
                      : 'Quienes somos',
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
                      ? 'Your ideal partner in'
                      : 'Construyendo confianza y',
                  version: 1,
                },
                {
                  type: "linebreak",
                  version: 1
                },

                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'real estate investments'
                      : 'resultados en cada inversión',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h2',
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
                      ? "Invest with confidence and maximize your assets. Veláz Capital, your ideal partner in real estate investments, ensures profitability and security."
                      : 'Somos una firma independiente, multidisciplinar, especializada en la gestión de activos residenciales, aportando la solucion adecuada para maximizar tus resultados.',
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
      },
    },
    {
      blockName: 'Archive Block',
      blockType: 'archiveBlock',
      categories: [],
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
                      ? 'Exclusive Properties'
                      : 'Propiedades Exclusivas',
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
                      ? 'Explore opportunities'
                      : 'Explora oportunidades',
                  version: 1,
                },
                {
                  type: "linebreak",
                  version: 1
                },

                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'current investment'
                      : 'actuales de inversión',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h2',
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
                      ? "Exclusive properties designed to meet your investment expectations."
                      : 'Propiedades exclusivas diseñadas para satisfacer tus expectativas de inversión.',
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
      },
      populateBy: 'collection',
      relationTo: 'properties',
    },
    {
      blockName: 'contentBlock',
      blockType: 'contentBlock',
      type: 'information',
      links: [
        {
          link: {
            type: 'custom',
            variant: 'default',
            color: 'primary',
            label: locale === 'en' ? 'Schedule' : 'Agenda una cita',
            url: '/',
          },
        },
      ],
      images: [
        {
          label: 'content 1',
          // @ts-ignore
          media: '{{IMAGE_INFORMATION_1}}',
        }
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
                      ? 'Investment strategies'
                      : 'Estrategias de inversión',
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
                      ? 'Comprehensive real estate strategies'
                      : 'Estrategias inmobiliarias integrales',
                  version: 1,
                },
                {
                  type: "linebreak",
                  version: 1
                },

                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'that generate value and profitability'
                      : 'que generan valor y rentabilidad',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h2',
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
                      ? "We are dedicated to making strategic investments in assets, focusing on identifying and maximizing the growth and profitability potential in each of our projects. With a short- and long-term vision and a deep knowledge of the market, we select real estate assets that offer high added value and solid investment opportunities."
                      : 'Nos dedicamos a realizar inversiones estratégicas de activos, enfocándonos en identificar y maximizar el potencial de crecimiento y rentabilidad en cada uno de nuestros proyectos. Con una visión a corto y largo plazo. un profundo conocimiento del mercado, seleccionamos activos inmobiliarios que ofrecen un alto valor agregado y oportunidades sólidas de inversión.',
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
      },
      informationRichText: {
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
                      ? 'Asset Management'
                      : 'Gestión de activos',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h3',
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
                      ? "Our team combines experience and analysis to create customized investment strategies, focused on preserving capital and generating sustainable returns with transparency and confidence."
                      : 'Nuestro equipo combina experiencia y análisis para crear estrategias de inversión personalizadas, enfocadas en preservar capital y generar rendimientos sostenibles con transparencia y confianza.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
            {
              type: 'list',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'Comprehensive asset management: Strategic and customized solutions to maximize the value and performance of your real estate investments.'
                      : 'Gestión integral de activos: Soluciones estratégicas y personalizadas para maximizar el valor y rendimiento de tus inversiones inmobiliarias.',
                  version: 1,
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'Agile and professional processes: Fast and efficient transactions, with attention to detail at every stage.'
                      : 'Procesos ágiles y profesionales: Transacciones rápidas y eficientes, con atención al detalle en cada etapa.',
                  version: 1,
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'Opportunity Identification: Market analysis to identify investments with high potential and profitability.'
                      : 'Identificación de Oportunidades: Análisis de mercado para identificar inversiones con alto potencial y rentabilidad.',
                  version: 1,
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'Personalized Advice: Close support and strategies adapted to your objectives and needs.'
                      : 'Asesoría Personalizada: Acompañamiento cercano y estrategias adaptadas a tus objetivos y necesidades.',
                  version: 1,
                },
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'Team of Experts: Professionals who design solutions to maximize benefits and optimize investments.'
                      : 'Equipo de Expertos: Profesionales que diseñan soluciones para maximizar beneficios y optimizar inversiones.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'ul',
              version: 1,
            },

          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
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
    title: locale === 'en' ? 'Invest with confidence' : 'Velaz Capital, Invierte con confianza y maximiza tus activos',
  },
  title: locale === 'en' ? 'Home' : 'Inicio',
})

export default home