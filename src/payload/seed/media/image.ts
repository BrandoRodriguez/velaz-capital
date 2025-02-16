import type { Media } from '@/payload-types'

const image = (locale: 'en' | 'es'): Omit<Media, 'createdAt' | 'id' | 'updatedAt'> => ({
   alt:
      locale === 'en'
         ? 'text-alternate'
         : 'text-alternate',
})

export default image