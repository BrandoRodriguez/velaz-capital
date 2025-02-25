import { cn } from '@/utils/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

// import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
// import { CallToActionBlock } from '@/blocks/CallToAction/Component'
// import { ContentBlock } from '@/blocks/Content/Component'
import FormBlock from './form/FormBlock'
// import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { TypedLocale } from 'payload'

const blockComponents = {
  // archive: ArchiveBlock,
  // content: ContentBlock,
  // cta: CallToActionBlock,
  formBlock: FormBlock,
  // mediaBlock: MediaBlock,
}

const RenderBlocks: React.FC<{
  //@ts-ignore
  blocks: Page['layout'][0][]
  locale: TypedLocale
}> = (props) => {

  const { blocks, locale } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <Block {...block} locale={locale} key={index} />
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}

export default RenderBlocks