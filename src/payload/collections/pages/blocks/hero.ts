import type { Field } from 'payload'

import {
 FixedToolbarFeature,
 HeadingFeature,
 InlineToolbarFeature,
 lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

const Hero: Field = {
 name: 'hero',
 type: 'group',
 fields: [
  {
   name: 'type',
   type: 'select',
   defaultValue: 'highImpact',
   label: 'Type',
   options: [
    {
     label: 'None',
     value: 'none',
    },
    {
     label: 'High Impact',
     value: 'highImpact',
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
    }
   ],
   label: 'Images',
  },
 ],
 label: false,
}

export default Hero