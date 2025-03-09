'use client'

import React from 'react'
import type { ContentBlock } from '@/payload-types'
import { CMSLink } from '@/components/ui/link'
import { Media } from '@/components/ui/media'
import RichText from '@/components/rich-text'
import { useMediaQuery } from "@/hooks/use-media-query";
import {
 Carousel,
 CarouselContent as CarouselContentUI,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";
import AutoScroll from 'embla-carousel-auto-scroll'

export const CarouselContent: React.FC<ContentBlock> = ({ richText, links, images }) => {

 const sm = useMediaQuery("(max-width: 40rem)");

 const plugin = React.useRef(AutoScroll({ playOnInit: true, stopOnInteraction: false, stopOnFocusIn: false, stopOnMouseEnter: false }));

 return (
  <section className="contentBlock relative py-10 md:py-20" id='about'>
   <div className='flex flex-col gap-12'>
    <div className="container mx-auto">
     <div className='flex flex-col justify-center items-center gap-8'>
      {richText && <RichText className='sm:text-center flex flex-col  justify-center sm:items-center img-hidden' content={richText} enableGutter={false} />}
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
    <Carousel
     className="w-full"
     plugins={[plugin.current]}
     opts={{
      align: "start",
      loop: true,
     }}
    >
     <CarouselContentUI>
      {images?.map((item, index) => (
       <CarouselItem
        key={index}
        className="max-sm:![flex-basis:70%] sm:basis-1/3 md:basis-1/3 lg:basis-1/5 flex items-center"
       >

        <React.Fragment>
         <Media
          resource={item?.media ?? ''}
         />
        </React.Fragment>

       </CarouselItem>
      ))}

     </CarouselContentUI>
    </Carousel>
   </div>

  </section>
 )
}
