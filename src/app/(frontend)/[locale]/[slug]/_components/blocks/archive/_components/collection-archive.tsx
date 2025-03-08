import React from 'react'

import { cn } from '@/utils/cn'

import type { Property } from '@/payload-types'

import { Card } from './card'

export type Props = {
 properties: Property[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
 const { properties } = props

 return (
  <div className="grid grid-cols-4 sm:grid-cols-12 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 mt-8 md:mt-12">
   {properties?.map((result, index) => {
    if (typeof result === 'object' && result !== null) {
     return (
      <div className={`col-span-4 ${index === 1 ? 'sm:pt-12' : ''}`} key={index}>
       <Card className="h-full" doc={result} relationTo="properties" />
      </div>
     )
    }
    return null
   })}
  </div>
 )
}
