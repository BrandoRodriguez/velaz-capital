import type { Form } from '@/payload-types'

const formOne = (locale: 'en' | 'es'): Partial<Form> => ({
  confirmationMessage: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text:
                locale === 'en'
                  ? 'The contact form has been submitted successfully.'
                  : 'El formulario de contacto ha sido enviado con éxito.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h3',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  confirmationType: 'message',
  createdAt: '2024-01-12T21:47:41.374Z',
  emails: [
    {
      emailFrom: '"Payload" \u003Cdemo@payloadcms.com\u003E',
      emailTo: '{{email}}',
      message: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'Your contact form submission was successfully received.'
                      : 'Su envío de formulario de contacto se recibió con éxito.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      subject: locale === 'en' ? "You've received a new message." : 'Ha recibido un nuevo mensaje.',
    },
  ],
  fields: [
    {
      name: 'full-name',
      blockName: 'full-name',
      blockType: 'text',
      label: locale === 'en' ? 'Full Name:' : 'Nombre completo:',
      required: true,
      width: 100,
    },
    {
      name: 'phone',
      blockName: 'phone',
      blockType: 'number',
      label: locale === 'en' ? 'Phone:' : 'Teléfono:',
      required: true,
      width: 100,
    },
    {
      name: 'email',
      blockName: 'email',
      blockType: 'email',
      label: locale === 'en' ? 'Email:' : 'Correo:',
      required: true,
      width: 100,
    },
    {
      name: 'select',
      blockName: 'select',
      blockType: 'select',
      label: locale === 'en' ? 'Select call day' : 'Selecciona día de llamada',
      required: false,
      width: 100,
      options: [
        {
          value: '1',
          label: locale === 'en' ? 'option 1' : 'opcion 1',
        },
        {
          value: '2',
          label: locale === 'en' ? 'option 3' : 'opcion 4',
        },
      ],
    },
    {
      name: 'select',
      blockName: 'select',
      blockType: 'select',
      label: locale === 'en' ? 'Select call time' : 'Selecciona hora de llamada',
      required: false,
      width: 100,
      options: [
        {
          value: '1',
          label: locale === 'en' ? 'option 1' : 'opcion 1',
        },
        {
          value: '2',
          label: locale === 'en' ? 'option 2' : 'opcion 2',
        },
      ],
    },
    {
      name: 'message',
      blockName: 'message',
      blockType: 'textarea',
      label: locale === 'en' ? 'Additional comments:' : 'comentarios adicionales:',
      required: false,
      width: 100,
    },
  ],
  redirect: undefined,
  submitButtonLabel: locale === 'en' ? 'Submit form' : 'Enviar formulario',
  title: locale === 'en' ? 'Invest Now' : 'Invertir Ahora',
  updatedAt: '2025-01-12T21:47:41.374Z',
})

const formTwo = (locale: 'en' | 'es'): Partial<Form> => ({
  confirmationMessage: {
    root: {
      type: 'root',
      children: [
        {
          type: 'heading',
          children: [
            {
              type: 'text',
              detail: 0,
              format: 0,
              mode: 'normal',
              style: '',
              text:
                locale === 'en'
                  ? 'The contact form has been submitted successfully.'
                  : 'El formulario de contacto ha sido enviado con éxito.',
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          tag: 'h3',
          version: 1,
        },
      ],
      direction: 'ltr',
      format: '',
      indent: 0,
      version: 1,
    },
  },
  confirmationType: 'message',
  createdAt: '2024-01-12T21:47:41.374Z',
  emails: [
    {
      emailFrom: '"Payload" \u003Cdemo@payloadcms.com\u003E',
      emailTo: '{{email}}',
      message: {
        root: {
          type: 'root',
          children: [
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text:
                    locale === 'en'
                      ? 'Your contact form submission was successfully received.'
                      : 'Su envío de formulario de contacto se recibió con éxito.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
      subject: locale === 'en' ? "You've received a new message." : 'Ha recibido un nuevo mensaje.',
    },
  ],
  fields: [
    {
      name: 'full-name',
      blockName: 'full-name',
      blockType: 'text',
      label: locale === 'en' ? 'Full Name:' : 'Nombre completo:',
      required: true,
      width: 100,
    },
    {
      name: 'phone',
      blockName: 'phone',
      blockType: 'number',
      label: locale === 'en' ? 'Phone:' : 'Teléfono:',
      required: true,
      width: 100,
    },
    {
      name: 'email',
      blockName: 'email',
      blockType: 'email',
      label: locale === 'en' ? 'Email:' : 'Correo:',
      required: true,
      width: 100,
    },
    {
      name: 'select',
      blockName: 'select',
      blockType: 'select',
      label: locale === 'en' ? 'Type of property' : 'Tipo de propiedad',
      required: true,
      width: 100,
      options: [
        {
          value: '1',
          label: locale === 'en' ? 'option 1' : 'opcion 1',
        },
        {
          value: '2',
          label: locale === 'en' ? 'option 3' : 'opcion 4',
        },
      ],
    },
    {
      name: 'size',
      blockName: 'size',
      blockType: 'number',
      label: locale === 'en' ? 'Property size:' : 'Tamaño de la propiedad:',
      required: true,
      width: 100,
    },
    {
      name: 'year',
      blockName: 'year',
      blockType: 'number',
      label: locale === 'en' ? 'Year of construction:' : 'Año de construcción:',
      required: true,
      width: 100,
    },
    {
      name: 'price',
      blockName: 'price',
      blockType: 'number',
      label: locale === 'en' ? 'Desired sale price:' : 'Precio de venta deseado:',
      required: false,
      width: 100,
    },
    {
      name: 'message',
      blockName: 'message',
      blockType: 'textarea',
      label: locale === 'en' ? 'Features or additional comments:' : 'Características o comentarios adicionales:',
      required: false,
      width: 100,
    },
  ],
  redirect: undefined,
  submitButtonLabel: locale === 'en' ? 'Submit form' : 'Enviar formulario',
  title: locale === 'en' ? 'Sell Property' : 'Vender Propiedad',
  updatedAt: '2025-01-12T21:47:41.374Z',
})

export { formOne, formTwo }