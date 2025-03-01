import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest } from 'payload'

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

//pages
import home from './pages/home'

//blocks
import { formOne, formTwo } from './pages/blocks/forms'

//media
import image from './media/image'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

//collections
const collections: CollectionSlug[] = [
  'media',
  'pages',
]

//globals
const globals: GlobalSlug[] = ['header', 'footer']


export const seed = async ({
  payload,
  req,
}: {
  payload: Payload
  req: PayloadRequest
}): Promise<void> => {

  payload.logger.info('Seeding database...')
  payload.logger.info(`— Clearing media...`)

  //  const mediaDir = path.resolve(dirname, '../../public/media')
  //  if (fs.existsSync(mediaDir)) {
  //   fs.rmdirSync(mediaDir, { recursive: true })
  //  }

  payload.logger.info(`— Clearing collections and globals...`)

  //clear the database
  for (const global of globals) {
    await payload.updateGlobal({
      slug: global,
      data: {
        navItems: [],
      },
      req,
    })
  }

  for (const collection of collections) {
    await payload.delete({
      collection: collection,
      where: {
        id: {
          exists: true,
        },
      },
      req,
    })
  }

  await payload.delete({
    collection: 'pages',
    where: {},
    req,
  })


  // #region Media
  payload.logger.info(`— Seeding media...`)

  const imageHeroDesktop = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/hero/hero.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageHeroDesktop.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/hero/hero.webp'),
    req,
  })

  const imageHeroMobile = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/hero/hero-m.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageHeroMobile.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/hero/hero-m.webp'),
    req,
  })

  const imageFormDesktop = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/form/form.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageFormDesktop.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/form/form.webp'),
    req,
  })

  const imageFormMobile = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/form/form-m.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageFormMobile.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/form/form-m.webp'),
    req,
  })

  const imageCarousel1 = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/carousel/1.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageCarousel1.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/carousel/1.webp'),
    req,
  })

  const imageCarousel2 = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/carousel/2.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageCarousel2.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/carousel/2.webp'),
    req,
  })

  const imageCarousel3 = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/carousel/3.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageCarousel3.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/carousel/3.webp'),
    req,
  })

  const imageCarousel4 = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/carousel/4.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageCarousel4.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/carousel/4.webp'),
    req,
  })

  const imageCarousel5 = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/carousel/1.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageCarousel5.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/carousel/1.webp'),
    req,
  })

  const imageCarousel6 = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/carousel/2.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageCarousel6.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/carousel/2.webp'),
    req,
  })


  let imageHeroDesktopID: number | string = imageHeroDesktop.id
  let imageHeroMobileID: number | string = imageHeroMobile.id
  let imageFormDesktopID: number | string = imageFormDesktop.id
  let imageFormMobileID: number | string = imageFormMobile.id
  let imageCarousel1ID: number | string = imageCarousel1.id
  let imageCarousel2ID: number | string = imageCarousel2.id
  let imageCarousel3ID: number | string = imageCarousel3.id
  let imageCarousel4ID: number | string = imageCarousel4.id
  let imageCarousel5ID: number | string = imageCarousel5.id
  let imageCarousel6ID: number | string = imageCarousel6.id

  if (payload.db.defaultIDType === 'text') {
    imageHeroDesktopID = `"${imageHeroDesktop.id}"`
    imageHeroMobileID = `"${imageHeroMobile.id}"`
    imageFormDesktopID = `"${imageFormDesktop.id}"`
    imageFormMobileID = `"${imageFormMobile.id}"`
    imageCarousel1ID = `"${imageCarousel1.id}"`
    imageCarousel2ID = `"${imageCarousel2.id}"`
    imageCarousel3ID = `"${imageCarousel3.id}"`
    imageCarousel4ID = `"${imageCarousel4.id}"`
    imageCarousel5ID = `"${imageCarousel5.id}"`
    imageCarousel6ID = `"${imageCarousel6.id}"`
  }
  // #endregion




  // #region Form

  payload.logger.info(`— Seeding contact form...`)

  const formOneData = await payload.create({
    collection: 'forms',
    locale: 'en',
    data: JSON.parse(JSON.stringify(formOne('en'))),
    req,
  })

  const formOneData_es = JSON.parse(JSON.stringify(formOne('es')))

  await payload.update({
    collection: 'forms',
    id: formOneData.id,
    locale: 'es',
    data: {
      redirect: formOneData_es.redirect,
      title: formOneData_es.title,
      id: formOneData.id,
      submitButtonLabel: formOneData_es.submitButtonLabel,
      confirmationType: formOneData_es.confirmationType,
      createdAt: formOneData_es.createdAt,
      updatedAt: formOneData_es.updatedAt,
      confirmationMessage: formOneData_es.confirmationMessage,
      fields: formOneData_es.fields?.map((field, index) => ({
        id: formOneData.fields![index].id,
        ...field,
      })),
      emails: formOneData_es.emails?.map((email, index) => ({
        id: formOneData.emails![index].id,
        ...email,
      })),
    },
    req,
  })

  const formTwoData = await payload.create({
    collection: 'forms',
    locale: 'en',
    data: JSON.parse(JSON.stringify(formTwo('en'))),
    req,
  })

  const formTwoData_es = JSON.parse(JSON.stringify(formTwo('es')))

  await payload.update({
    collection: 'forms',
    id: formTwoData.id,
    locale: 'es',
    data: {
      redirect: formTwoData_es.redirect,
      title: formTwoData_es.title,
      id: formTwoData.id,
      submitButtonLabel: formTwoData_es.submitButtonLabel,
      confirmationType: formTwoData_es.confirmationType,
      createdAt: formTwoData_es.createdAt,
      updatedAt: formTwoData_es.updatedAt,
      confirmationMessage: formTwoData_es.confirmationMessage,
      fields: formTwoData_es.fields?.map((field, index) => ({
        id: formTwoData.fields![index].id,
        ...field,
      })),
      emails: formTwoData_es.emails?.map((email, index) => ({
        id: formTwoData.emails![index].id,
        ...email,
      })),
    },
    req,
  })

  let formOneID: number | string = formOneData.id
  let formTwoID: number | string = formTwoData.id

  if (payload.db.defaultIDType === 'text') {
    formOneID = `"${formOneID}"`
    formTwoID = `"${formTwoID}"`
  }


  // #region Pages

  payload.logger.info(`— Seeding home page...`)

  const homePage = await payload.create({
    collection: 'pages',
    locale: 'en',
    data: JSON.parse(
      JSON.stringify(home('en'))
        .replace(/"\{\{IMAGE_HERO_DESKTOP\}\}"/g, String(imageHeroDesktopID))
        .replace(/"\{\{IMAGE_HERO_MOBILE\}\}"/g, String(imageHeroMobileID))
        .replace(/"\{\{IMAGE_FORM_DESKTOP\}\}"/g, String(imageFormDesktopID))
        .replace(/"\{\{IMAGE_FORM_MOBILE\}\}"/g, String(imageFormMobileID))
        .replace(/"\{\{CONTACT_FORM_ONE_ID\}\}"/g, String(formOneID))
        .replace(/"\{\{CONTACT_FORM_TWO_ID\}\}"/g, String(formTwoID))
        .replace(/"\{\{IMAGE_CAROUSEL_1\}\}"/g, String(imageCarousel1ID))
        .replace(/"\{\{IMAGE_CAROUSEL_2\}\}"/g, String(imageCarousel2ID))
        .replace(/"\{\{IMAGE_CAROUSEL_3\}\}"/g, String(imageCarousel3ID))
        .replace(/"\{\{IMAGE_CAROUSEL_4\}\}"/g, String(imageCarousel4ID))
        .replace(/"\{\{IMAGE_CAROUSEL_5\}\}"/g, String(imageCarousel5ID))
        .replace(/"\{\{IMAGE_CAROUSEL_6\}\}"/g, String(imageCarousel6ID))
    ),
    req,
  })

  await payload.update({
    collection: 'pages',
    id: homePage.id,
    locale: 'es',
    data: JSON.parse(
      JSON.stringify(home('es'))
        .replace(/"\{\{IMAGE_HERO_DESKTOP\}\}"/g, String(imageHeroDesktopID))
        .replace(/"\{\{IMAGE_HERO_MOBILE\}\}"/g, String(imageHeroMobileID))
        .replace(/"\{\{IMAGE_FORM_DESKTOP\}\}"/g, String(imageFormDesktopID))
        .replace(/"\{\{IMAGE_FORM_MOBILE\}\}"/g, String(imageFormMobileID))
        .replace(/"\{\{CONTACT_FORM_ONE_ID\}\}"/g, String(formOneID))
        .replace(/"\{\{CONTACT_FORM_TWO_ID\}\}"/g, String(formTwoID))
        .replace(/"\{\{IMAGE_CAROUSEL_1\}\}"/g, String(imageCarousel1ID))
        .replace(/"\{\{IMAGE_CAROUSEL_2\}\}"/g, String(imageCarousel2ID))
        .replace(/"\{\{IMAGE_CAROUSEL_3\}\}"/g, String(imageCarousel3ID))
        .replace(/"\{\{IMAGE_CAROUSEL_4\}\}"/g, String(imageCarousel4ID))
        .replace(/"\{\{IMAGE_CAROUSEL_5\}\}"/g, String(imageCarousel5ID))
        .replace(/"\{\{IMAGE_CAROUSEL_6\}\}"/g, String(imageCarousel6ID))
    ),
    req,
  })


  // #region Globals
  payload.logger.info(`— Seeding header...`)

  const header = await payload.updateGlobal({
    slug: 'header',
    locale: 'en',
    data: {
      navItems: [
        {
          link: {
            type: 'custom',
            label: 'Home',
            url: '/',
            variant: 'link',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Properties',
            url: '/',
            variant: 'link',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'About',
            url: '/',
            variant: 'link',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Services',
            url: '/',
            variant: 'link',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Contacto',
            url: '/',
            variant: 'link',
          },
        },
        // {
        //   link: {
        //     type: 'reference',
        //     label: 'Contact',
        //     reference: {
        //       relationTo: 'pages',
        //       value: contactPage.id,
        //     },
        //   },
        // },
      ],
      buttonItems: [
        {
          link: {
            type: 'custom',
            label: 'Schedule',
            url: '/',
            variant: 'default',
            color: 'primary',
          },
        }
      ],
    },
    req,
  })

  await payload.updateGlobal({
    slug: 'header',
    locale: 'es',
    data: {
      navItems: [
        {
          id: header.navItems![0].id,
          link: {
            type: 'custom',
            url: '/',
            label: 'Inicio',
            variant: 'link',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Propiedades',
            url: '/',
            variant: 'link',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Nosotros',
            url: '/',
            variant: 'link',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Ofrecemos',
            url: '/',
            variant: 'link',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Contacto',
            url: '/',
            variant: 'link',
          },
        },

        // {
        //   id: header.navItems![1].id,
        //   link: {
        //     type: 'reference',
        //     reference: {
        //       relationTo: 'pages',
        //       value: contactPage.id,
        //     },
        //     label: 'Contacto',
        //   },
        // },
      ],
      buttonItems: [
        {
          link: {
            type: 'custom',
            label: 'Agenda una cita',
            url: '/',
            variant: 'default',
            color: 'primary',
          },
        },
      ]
    },
    req,
  })

  // payload.logger.info(`— Seeding footer...`)

  // const footer = await payload.updateGlobal({
  //   slug: 'footer',
  //   locale: 'en',
  //   data: {
  //     navItems: [
  //       {
  //         link: {
  //           type: 'custom',
  //           label: 'Admin',
  //           url: '/admin',
  //         },
  //       },
  //       {
  //         link: {
  //           type: 'custom',
  //           label: 'Source Code',
  //           newTab: true,
  //           url: 'https://github.com/payloadcms/payload/tree/beta/templates/website',
  //         },
  //       },
  //       {
  //         link: {
  //           type: 'custom',
  //           label: 'Payload',
  //           newTab: true,
  //           url: 'https://payloadcms.com/',
  //         },
  //       },
  //     ],
  //   },
  //   req,
  // })

  // await payload.updateGlobal({
  //   slug: 'footer',
  //   locale: 'es',
  //   data: {
  //     navItems: [
  //       {
  //         id: footer.navItems![0].id,
  //         link: {
  //           type: 'custom',
  //           url: '/admin',
  //           label: 'Panel',
  //         },
  //       },
  //       {
  //         id: footer.navItems![1].id,
  //         link: {
  //           type: 'custom',
  //           url: 'https://github.com/payloadcms/payload/tree/beta/templates/website',
  //           label: 'Código fuente',
  //         },
  //       },
  //       {
  //         id: footer.navItems![2].id,
  //         link: {
  //           type: 'custom',
  //           url: 'https://payloadcms.com/',
  //           label: 'Payload',
  //         },
  //       },
  //     ],
  //   },
  //   req,
  // })
  // #endregion


  payload.logger.info('Seeded database successfully!')
}
