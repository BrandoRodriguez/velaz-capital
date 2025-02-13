//db
import { postgresAdapter } from '@payloadcms/db-postgres'

//editor
import { lexicalEditor } from '@payloadcms/richtext-lexical'

//utils
import path from 'path'
import sharp from 'sharp'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

//collections
import Users from './collections/users'
import Media from './collections/media'
import Pages from './collections/pages'
import Properties from './collections/properties'
import Categories from './collections/categories'

//globals
import Header from './collections/globals/header'
import Footer from './collections/globals/footer'

//languages
import { es } from '@payloadcms/translations/languages/es'
import { en } from '@payloadcms/translations/languages/en'

//localization
import localization from './i18n/localization'

//plugins
import { plugins } from '@/payload/plugins'

export default buildConfig({
  i18n: {
    supportedLanguages: { es, en },
  },
  localization,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      title: 'Dashboard',
      titleSuffix: '- Brando Rodriguez',
      description: 'Brando Rodriguez'
    },
  },
  collections: [Pages, Properties, Categories, Media, Users],
  globals: [Header, Footer],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  plugins: [
    ...plugins,
    // storage-adapter-placeholder
    // vercelBlobStorage({
    //   collections: {
    //     media: true,
    //   },
    //   token: process.env.BLOB_READ_WRITE_TOKEN || '',
    // }),
  ],
  sharp
})
