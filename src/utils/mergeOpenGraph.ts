import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: '',
  images: [
    {
      url: process.env.NEXT_PUBLIC_SERVER_URL
        ? `${process.env.NEXT_PUBLIC_SERVER_URL}/website-template-OG.webp`
        : '/website-template-OG.webp',
    },
  ],
  siteName: '',
  title: '',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
