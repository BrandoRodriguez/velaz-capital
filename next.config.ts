import type { NextConfig } from "next";
import { withPayload } from '@payloadcms/next/withPayload'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()


const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    //@ts-ignore
    remotePatterns: [
      ...[NEXT_PUBLIC_SERVER_URL,  /* 'https://example.com' */].map((item) => {
        const url = new URL(item)

        return {
          hostname: url.hostname,
          protocol: url.protocol.replace(':', ''),
        }
      }),
    ],
  },

  reactStrictMode: true,
};
export default withNextIntl(withPayload(nextConfig))


// import { withPayload } from '@payloadcms/next/withPayload'
// import createNextIntlPlugin from 'next-intl/plugin'

// const withNextIntl = createNextIntlPlugin()

// import redirects from './redirects.js'

// const NEXT_PUBLIC_SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000'

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       ...[NEXT_PUBLIC_SERVER_URL,  /* 'https://example.com' */].map((item) => {
//         const url = new URL(item)

//         return {
//           hostname: url.hostname,
//           protocol: url.protocol.replace(':', ''),
//         }
//       }),
//     ],
//   },
//   reactStrictMode: true,
//   redirects,
// }

// export default withNextIntl(withPayload(nextConfig))
