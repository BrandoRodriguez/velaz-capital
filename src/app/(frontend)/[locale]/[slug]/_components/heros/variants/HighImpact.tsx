'use client'

import React from 'react'
import type { Page } from '@/payload-types'
// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
import RichText from '@/components/rich-text'


export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
    return (
        <section className="relative flex items-start  text-white">
            {/* <div className="container mt-40 z-10 relative">
                <div className="flex items-center  justify-between">
                    <div className="min-h-[542px] flex flex-col justify-center">
                        <div className="max-w-[45rem]">
                            {richText && <RichText className="mb-6 hero-paragraph" content={richText} enableGutter={false} />}
                            {Array.isArray(links) && links.length > 0 && (
                                <ul className="flex gap-4">
                                    {links.map(({ link }, i) => {
                                        return (
                                            <li key={i}>
                                                <CMSLink {...link} />
                                            </li>
                                        )
                                    })}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

            </div>
            <div className="min-h-screen select-none">
                {media && typeof media === 'object' && (
                    <React.Fragment>
                        <Media fill imgClassName="-z-10 object-cover " priority resource={media} />
                    </React.Fragment>
                )}
            </div> */}
        </section>
    )
}
