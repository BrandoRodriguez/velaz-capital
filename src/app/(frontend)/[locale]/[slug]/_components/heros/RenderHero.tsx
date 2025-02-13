import React from 'react'

import type { Page } from '@/payload-types'

import { HighImpactHero, LowImpactHero, MediumImpactHero } from './variants'

const heroes = {
  highImpact: HighImpactHero,
  lowImpact: LowImpactHero,
  mediumImpact: MediumImpactHero,
}

const RenderHero: React.FC<Page['hero']> = (props) => {


  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}

export default RenderHero