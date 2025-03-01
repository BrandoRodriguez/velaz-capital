import React from 'react'

import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Error } from './lib/error'
import { Width } from './lib/width'

export const Number: React.FC<
 TextField & {
  errors: Partial<
   FieldErrorsImpl<{
    [x: string]: any
   }>
  >
  register: UseFormRegister<FieldValues>
 }
> = ({ name, defaultValue, errors, label, register, required: requiredFromProps, width }) => {
 return (
  <Width width={width}>
   <Input
    defaultValue={defaultValue}
    id={name}
    type="number"
    placeholder={label}
    radius='none'
    size='lg'
    {...register(name, { required: requiredFromProps })}
   />
   {requiredFromProps && errors[name] && <Error />}
  </Width>
 )
}
