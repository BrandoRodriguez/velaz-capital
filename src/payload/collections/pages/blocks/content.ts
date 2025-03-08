import type { Block } from 'payload'

import {
 FixedToolbarFeature,
 HeadingFeature,
 InlineToolbarFeature,
 lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

const ContentBlock: Block = {
 slug: 'contentBlock',
 interfaceName: 'ContentBlock',
 fields: [
  {
   name: 'type',
   type: 'select',
   defaultValue: 'carousel',
   label: 'Type',
   options: [
    {
     label: 'None',
     value: 'none',
    },
    {
     label: 'Carousel',
     value: 'carousel',
    },
    {
     label: 'Information',
     value: 'information',
    },
   ],
   required: true,
  },
  {
   name: 'richText',
   type: 'richText',
   localized: true,
   editor: lexicalEditor({
    features: ({ rootFeatures }) => {
     return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
     ]
    },
   }),
   label: false,
  },
  {
   name: 'informationRichText',
   type: 'richText',
   localized: true,
   editor: lexicalEditor({
    features: ({ rootFeatures }) => {
     return [
      ...rootFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
      FixedToolbarFeature(),
      InlineToolbarFeature(),
     ]
    },
   }),
   admin: {
    condition: (_, { type } = {}) => ['information'].includes(type),
   },
   label: false,
  },
  linkGroup({
   overrides: {
    maxRows: 2,
   },
  }),
  {
   name: 'images',
   type: 'array',
   // maxRows: 2,
   admin: {
    components: {
     RowLabel: '@/payload/components/row-label',
    },
    condition: (_, { type } = {}) => ['carousel', 'information'].includes(type),
   },
   fields: [
    {
     name: 'label',
     type: 'text',
    },
    {
     name: 'media',
     type: 'upload',
     relationTo: 'media',
     required: false,
    }
   ],
   label: 'Images',
  },
 ],
}


export default ContentBlock