'use client'

import React from 'react'

//types
import type { Form as FormType } from '@payloadcms/plugin-form-builder/types'


//react-hook-form
import { useMediaQuery } from "@/hooks/use-media-query";

//ui
import RichText from '@/components/rich-text'

//media
import { Media } from '@/components/ui/media'

import TabsForm from './TabsForm'

export type Value = unknown

export interface Property {
  [key: string]: Value
}

export interface Data {
  [key: string]: Property | Property[]
}

export type FormBlockType = {
  blockName?: string
  blockType?: 'formBlock'
  enableIntro: boolean,
  images: {
    label: string
    media: string
  }[],
  form: FormType
  introContent?: {
    [k: string]: unknown
  }[]
}

const FormBlock: React.FC<
  {
    id?: string
  } & FormBlockType
> = (props) => {

  const {
    enableIntro,
    images,
    introContent,
    form: formFromProps,
  } = props

  console.log(props, 'images')


  const sm = useMediaQuery("(max-width: 40rem)");

  const mediaDesktop = images?.find(image => image.label === 'Desktop')?.media;
  const mediaMobile = images?.find(image => image.label === 'Mobile')?.media;

  return (
    <section className="formBlock relative">
      <div className="container mx-auto z-10 pt-10">
        <div className='grid md:grid-cols-2 max-md:gap-8 items-center'>
          {enableIntro && introContent && (
            <RichText className="flex flex-col gap-6" content={introContent} enableGutter={false} />
          )}
          <div className='flex justify-end items-end'>
            <TabsForm form={formFromProps} />
          </div>
        </div>
      </div>
      <React.Fragment>
        <Media
          fill
          imgClassName="-z-10 object-cover bg-top"
          priority
          resource={sm ? mediaDesktop ?? '' : mediaMobile ?? ''}
        />
      </React.Fragment>
    </section>
  )
}

export default FormBlock

