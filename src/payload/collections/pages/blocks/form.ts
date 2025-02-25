import type { Block } from 'payload'

import {
 FixedToolbarFeature,
 HeadingFeature,
 InlineToolbarFeature,
 lexicalEditor,
} from '@payloadcms/richtext-lexical'

const FormBlock: Block = {
 slug: 'formBlock',
 interfaceName: 'FormBlock',
 fields: [
  {
   name: 'form',
   type: 'relationship',
   relationTo: 'forms',
   required: true,
   hasMany: true,
  },
  {
   name: 'enableIntro',
   type: 'checkbox',
   label: 'Enable Intro Content',
  },
  {
   name: 'introContent',
   type: 'richText',
   localized: true,
   admin: {
    condition: (_, { enableIntro }) => Boolean(enableIntro),
   },
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
   label: 'Intro Content',
  },
  {
   name: 'images',
   type: 'array',
   // maxRows: 2,
   admin: {
    condition: (_, { enableIntro }) => Boolean(enableIntro),
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
 graphQL: {
  singularName: 'FormBlock',
 },
 labels: {
  plural: 'Form Blocks',
  singular: 'Form Block',
 },
}

export default FormBlock
