import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import FormBlock from './form/FormBlock'
import ContentBlock from './content/RenderContent'
import ArchiveBlock from './archive/ArchiveBlock'

import { TypedLocale } from 'payload'

const blockComponents = {
  // archive: ArchiveBlock,
  // content: ContentBlock,
  // cta: CallToActionBlock,
  // mediaBlock: MediaBlock,
  formBlock: FormBlock,
  contentBlock: ContentBlock,
  archiveBlock: ArchiveBlock
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
                // @ts-ignore
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