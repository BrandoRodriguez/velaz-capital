import React from 'react'

import type { SelectField } from '@payloadcms/plugin-form-builder/types'
import type { Control, FieldErrorsImpl, FieldValues } from 'react-hook-form'
import {
 Select as SelectComponent,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from '@/components/ui/select'
import { Controller } from 'react-hook-form'
import { Error } from './lib/error'
import { Width } from './lib/width'

export const Select: React.FC<
 SelectField & {
  control: Control<FieldValues, any>
  errors: Partial<
   FieldErrorsImpl<{
    [x: string]: any
   }>
  >
 }
> = ({ name, control, errors, label, options, required, width }) => {
 return (
  <Width width={width}>
   <Controller
    control={control}
    defaultValue=""
    name={name}
    render={({ field: { onChange, value } }) => {
     const controlledValue = options.find((t) => t.value === value)

     return (
      <SelectComponent onValueChange={(val) => onChange(val)} value={controlledValue?.value}>
       <SelectTrigger
        className="w-full"
        id={name}
        radius='none'
        size='lg'
       >
        <SelectValue placeholder={label} />
       </SelectTrigger>
       <SelectContent>
        {options.map(({ label, value }) => {
         return (
          <SelectItem key={value} value={value}>
           {label}
          </SelectItem>
         )
        })}
       </SelectContent>
      </SelectComponent>
     )
    }}
    rules={{ required }}
   />
   {required && errors[name] && <Error />}
  </Width>
 )
}
