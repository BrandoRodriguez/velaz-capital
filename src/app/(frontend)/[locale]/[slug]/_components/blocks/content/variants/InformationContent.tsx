'use client'

import React from 'react'
import type { ContentBlock } from '@/payload-types'
import { CMSLink } from '@/components/ui/link'
import { Media } from '@/components/ui/media'
import RichText from '@/components/rich-text'
import { useMediaQuery } from "@/hooks/use-media-query";


export const InformationContent: React.FC<ContentBlock> = ({ richText, informationRichText, links, images }) => {

 const sm = useMediaQuery("(max-width: 40rem)");

 const mediaDesktop = images?.find(image => image.label === 'Desktop')?.media;

 return (
  <section className="contentBlock relative max-sm:py-10 md:pt-20" id='we-offer'>
   <div className='flex flex-col gap-8 lg:gap-12'>
    <div className="container mx-auto">
     <div className='flex flex-col justify-center items-center gap-8'>
      {richText && <RichText className='sm:text-center flex flex-col  justify-center sm:items-center img-hidden' content={richText} enableGutter={false} />}

      {/* {Array.isArray(links) && links.length > 0 && (
       <ul className="flex gap-4 max-sm:w-full">
        {links.map(({ link }, i) => {
         return (
          <li key={i} className='max-sm:w-full'>
           <CMSLink {...link} size={sm ? 'lg' : 'xl'} className='max-sm:w-full' />
          </li>
         )
        })}
       </ul>
      )} */}
     </div>
    </div>
    <div className='relative overflow-hidden'>
     <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 max-sm:gap-8'>
      <div className='flex flex-col gap-6 lg:pr-12 lg:py-12'>
       {informationRichText && <RichText className='flex flex-col gap-6' content={informationRichText} enableGutter={false} />}
       {Array.isArray(links) && links.length > 0 && (
        <ul className="flex gap-4 max-sm:w-full">
         {links.map(({ link }, i) => {
          return (
           <li key={i} className='max-sm:w-full'>
            <CMSLink {...link} size={sm ? 'lg' : 'xl'} className='max-sm:w-full' />
           </li>
          )
         })}
        </ul>
       )}
      </div>
      <div className='lg:hidden'>
       <React.Fragment>
        <Media
         resource={mediaDesktop ?? ''}
         imgClassName="h-full"
        />
       </React.Fragment>
      </div>
     </div>

     <div className='max-lg:hidden absolute top-0 right-0'>
      <div className='grid grid-cols-1 lg:grid-cols-2'>
       <div>

       </div>
       <div className='h-full'>
        <React.Fragment>
         <Media
          resource={mediaDesktop ?? ''}
          imgClassName=" h-full "
         />
        </React.Fragment>
       </div>
      </div>
     </div>
    </div>
   </div>

  </section>
 )
}
