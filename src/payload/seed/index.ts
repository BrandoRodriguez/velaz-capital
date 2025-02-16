import type { CollectionSlug, GlobalSlug, Payload, PayloadRequest } from 'payload'

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

//pages
import home from './pages/home'

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
    filePath: path.resolve(dirname, './media/home/hero.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageHeroDesktop.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/hero.webp'),
    req,
  })

  const imageHeroMobile = await payload.create({
    collection: 'media',
    locale: 'en',
    data: image('en'),
    filePath: path.resolve(dirname, './media/home/hero-m.webp'),
    req,
  })

  await payload.update({
    collection: 'media',
    id: imageHeroMobile.id,
    data: image('es'),
    locale: 'es',
    filePath: path.resolve(dirname, './media/home/hero-m.webp'),
    req,
  })

  let imageHeroDesktopID: number | string = imageHeroDesktop.id
  let imageHeroMobileID: number | string = imageHeroMobile.id

  if (payload.db.defaultIDType === 'text') {
    imageHeroDesktopID = `"${imageHeroDesktop.id}"`
    imageHeroMobileID = `"${imageHeroMobile.id}"`
  }
  // #endregion


  // #region Pages

  payload.logger.info(`— Seeding home page...`)

  const homePage = await payload.create({
    collection: 'pages',
    locale: 'en',
    data: JSON.parse(
      JSON.stringify(home('en'))
        .replace(/"\{\{IMAGE_HERO_DESKTOP\}\}"/g, String(imageHeroDesktopID))
        .replace(/"\{\{IMAGE_HERO_MOBILE\}\}"/g, String(imageHeroMobileID))
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
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Properties',
            url: '/',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'About',
            url: '/',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Services',
            url: '/',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Contacto',
            url: '/',
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
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Propiedades',
            url: '/',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Nosotros',
            url: '/',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Ofrecemos',
            url: '/',
          },
        },
        {
          link: {
            type: 'custom',
            label: 'Contacto',
            url: '/',
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
