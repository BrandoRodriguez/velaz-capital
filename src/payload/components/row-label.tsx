'use client'

import { useRowLabel } from '@payloadcms/ui'

const ArrayRowLabel = () => {

 const { data } = useRowLabel<{ label?: string }>()

 const customLabel = `${data.label || 'Image'} `

 return <div>{customLabel}</div>
}

export default ArrayRowLabel