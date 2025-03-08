import React from 'react'

import type { ContentBlock } from '@/payload-types'

import { CarouselContent, InformationContent } from './variants'

const content = {
  carousel: CarouselContent,
  information: InformationContent
}

const RenderContentBlock: React.FC<ContentBlock> = (props) => {

  const { type } = props || {}

  if (!type || type === 'none') return null

  const ContentBlockToRender = content[type]

  if (!ContentBlockToRender) return null

  return <ContentBlockToRender {...props} />
}

export default RenderContentBlock