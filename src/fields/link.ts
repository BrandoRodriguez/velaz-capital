import type { Field } from 'payload'

import { deepMerge } from '@/utils'

export type LinkVariants = 'default' | 'outline' | 'soft' | 'ghost'
export type LinkColors = 'default' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'destructive'

export const variantOptions: Record<LinkVariants, { label: string; value: string }> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  outline: {
    label: 'Outline',
    value: 'outline',
  },
  soft: {
    label: 'Soft',
    value: 'soft',
  },
  ghost: {
    label: 'Ghost',
    value: 'ghost',
  },
}

export const colorOptions: Record<LinkColors, { label: string; value: string }> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  primary: {
    label: 'Primary',
    value: 'primary',
  },
  secondary: {
    label: 'Secondary',
    value: 'secondary',
  },
  success: {
    label: 'Success',
    value: 'success',
  },
  info: {
    label: 'Info',
    value: 'info',
  },
  warning: {
    label: 'Warning',
    value: 'warning',
  },
  destructive: {
    label: 'Destructive',
    value: 'destructive',
  }
}


type LinkType = (options?: {
  variants?: LinkVariants[] | false
  colors?: LinkColors[] | false
  disableLabel?: boolean
  overrides?: Record<string, unknown>
}) => Field

export const link: LinkType = ({ variants, colors, disableLabel = false, overrides = {} } = {}) => {
  const linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: 'Open in new tab',
          },
        ],
      },
    ],
  }

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
      },
      label: 'Document to link to',
      maxDepth: 1,
      relationTo: ['pages'],
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: 'Custom URL',
      required: true,
    },
  ]

  if (!disableLabel) {
    linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }))

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          localized: true,
          type: 'text',
          admin: {
            width: '50%',
          },
          label: 'Label',
          required: true,
        },
      ],
    })
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes]
  }

  let variantOptionsToUse =
    [
      variantOptions.default,
      variantOptions.outline,
      variantOptions.soft,
      variantOptions.ghost,
    ];

  if (variants) {
    variantOptionsToUse = variants.map((variant) => variantOptions[variant]);
  }

  let colorOptionsToUse =
    [
      colorOptions.default,
      colorOptions.primary,
      colorOptions.secondary,
      colorOptions.success,
      colorOptions.info,
      colorOptions.warning,
      colorOptions.destructive,
    ];

  if (colors) {
    colorOptionsToUse = colors.map((color) => colorOptions[color]);
  }

  linkResult.fields.push({
    type: 'row',
    fields: [
      {
        name: 'variant',
        type: 'select',
        admin: {
          description: 'Choose how the link should be rendered.',
          width: '50%',
        },
        defaultValue: 'default',
        options: variantOptionsToUse,
      },
      {
        name: 'color',
        type: 'select',
        admin: {
          description: 'Choose how the link should be rendered.',
          width: '50%',
        },
        defaultValue: 'default',
        options: colorOptionsToUse,
      },
    ],
  });

  return deepMerge(linkResult, overrides)
}
