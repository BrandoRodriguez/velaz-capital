import type { Field } from 'payload'

import {
 FixedToolbarFeature,
 HeadingFeature,
 InlineToolbarFeature,
 lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

const Content: Field = {
 name: 'content',
 type: 'group',
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
  linkGroup({
   overrides: {
    maxRows: 2,
   },
  }),
  {
   name: 'images',
   type: 'array',
   maxRows: 2,
   admin: {
    components: {
     RowLabel: '@/payload/components/row-label',
    },
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
     admin: {
      condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
     },
    }
    
   ],
   label: 'Images',
  },
 ],
 label: false,
}

export default Content