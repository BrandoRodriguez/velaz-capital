import type { Block } from 'payload'

import {
    FixedToolbarFeature,
    HeadingFeature,
    InlineToolbarFeature,
    lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { linkGroup } from '@/fields/linkGroup'

const CallToAction: Block = {
    slug: 'cta',
    interfaceName: 'CallToActionBlock',
    fields: [
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
            variants: ['default', 'outline'],
            overrides: {
                maxRows: 2,
            },
        }),
    ],
    labels: {
        plural: 'Calls to Action',
        singular: 'Call to Action',
    },
}

export default CallToAction