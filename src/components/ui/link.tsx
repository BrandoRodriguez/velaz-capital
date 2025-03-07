import { Button, buttonVariants, type ButtonProps } from '@/components/ui/button'
import { cn } from '@/utils/cn'
import { Link as i18nLink } from '@/i18n/routing'
import React from 'react'

import type { Page, Property } from '@/payload-types'
import NextLink from 'next/link'

type CMSLinkType = {
  variant?: 'default' | ButtonProps['variant']
  color?: 'default' | ButtonProps['color'] | null
  children?: React.ReactNode
  className?: string
  label?: string | null
  newTab?: boolean | null
  reference?: {
    relationTo: 'pages' | 'posts'
    value: Page | Property | string | number
  } | null
  size?: ButtonProps['size'] | null
  type?: 'custom' | 'reference' | null
  url?: string | null
}

export const CMSLink: React.FC<CMSLinkType> = (props) => {

  const {
    type,
    variant = 'default',
    color = 'default',
    children,
    label,
    newTab,
    className,
    reference,
    size = 'default',
    url,
  } = props

  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${reference.value.slug
      }`
      : url

  if (!href) return null

  const finalHref = href || url || ''
  const Link = finalHref.startsWith('/admin') ? NextLink : i18nLink

  // const size = appearance === 'link' ? 'clear' : sizeFromProps
  const newTabProps = newTab ? { rel: 'noopener noreferrer', target: '_blank' } : {}

  // if (variant === 'link') {
  //   return (
  //     <Link href={finalHref} {...newTabProps}>
  //       {label && label}
  //       {children && children}
  //     </Link>
  //   )
  // }

  return (
    <Button asChild className={className} variant={variant} color={color ?? 'default'} size={size}>
      <Link href={finalHref} {...newTabProps}>
        {label && label}
        {children && children}
      </Link>
    </Button>
  )
}
