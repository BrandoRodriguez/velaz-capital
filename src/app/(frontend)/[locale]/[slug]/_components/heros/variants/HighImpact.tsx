'use client'

import React from 'react'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/ui/link'
import { Media } from '@/components/ui/media'
import RichText from '@/components/rich-text'
import { useMediaQuery } from "@/hooks/use-media-query";

export const HighImpactHero: React.FC<Page['hero']> = ({ links, richText, images }) => {

 const sm = useMediaQuery("(max-width: 40rem)");

 const mediaDesktop = images?.find(image => image.label === 'Desktop')?.media;
 const mediaMobile = images?.find(image => image.label === 'Mobile')?.media;

 return (
  <section className="hero h-svh relative">
   <div className="container mx-auto z-10">
    <div className='h-svh flex flex-col justify-end sm:justify-center max-sm:pb-10'>
     <div className='flex flex-col justify-center items-center gap-8'>
      {richText && <RichText className='sm:text-center flex flex-col gap-6 justify-center sm:items-center' content={richText} enableGutter={false} />}
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