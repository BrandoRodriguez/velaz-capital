import type { CollectionConfig } from 'payload'

//utilities
import path from 'path'
import { fileURLToPath } from 'url'

//auth
import { authenticated, anyone } from '@/payload/access'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      localized: true,
      required: true,
    }
  ],
  upload: {
    staticDir: path.resolve(dirname, '../../../../public/media'),
  },
}

export default Media