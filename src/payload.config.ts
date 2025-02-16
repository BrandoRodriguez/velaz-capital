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
import Users from '@/payload/collections/users'
import Media from '@/payload/collections/media'
import Pages from '@/payload/collections/pages'
import Properties from '@/payload/collections/properties'
import Categories from '@/payload/collections/categories'

//globals
import Header from '@/payload/collections/globals/header'
import Footer from '@/payload/collections/globals/footer'

//languages
import { es } from '@payloadcms/translations/languages/es'
import { en } from '@payloadcms/translations/languages/en'

//localization
import localization from './i18n/localization'

//plugins
import plugins from '@/payload/plugins'

//seed
import seedHandler from '@/payload/seed/seedHandler'

export default buildConfig({
  i18n: {
    supportedLanguages: { es, en },
  },
  localization,
  admin: {
    components: {
      afterDashboard: ['@/payload/components/after-dashboard'],
    },
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
  endpoints: [
    {
      handler: seedHandler,
      method: 'get',
      path: '/seed',
    },
  ],
  plugins: [
    ...plugins,
  ],
  sharp
})
