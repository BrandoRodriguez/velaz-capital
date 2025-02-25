import React from 'react'

import type { TextField } from '@payloadcms/plugin-form-builder/types'
import type { FieldErrorsImpl, FieldValues, UseFormRegister } from 'react-hook-form'
import { Textarea as TextAreaComponent } from '@/components/ui/textarea'
import { Error } from './lib/error'
import { Width } from './lib/width'

export const Textarea: React.FC<
  TextField & {
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
    register: UseFormRegister<FieldValues>
    rows?: number
  }
> = ({
  name,
  defaultValue,
  errors,
  label,
  register,
  required: requiredFromProps,
  rows = 3,
  width,
}) => {
    return (
      <Width width={width}>
        <TextAreaComponent
          defaultValue={defaultValue}
          id={name}
          rows={rows}
          placeholder={label}
          radius='none'
          {...register(name, { required: requiredFromProps })}
        />

        {requiredFromProps && errors[name] && <Error />}
      </Width>
    )
  }
