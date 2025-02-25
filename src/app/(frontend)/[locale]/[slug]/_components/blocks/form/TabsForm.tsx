'use client'

import { useRouter } from 'next/navigation'
import React, { useCallback, useState } from 'react'
import RichText from '@/components/rich-text'
import { buildInitialFormState } from './buildInitialFormState'
import { fields } from './ui/fields'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { cn } from '@/utils/cn'

//react-hook-form
import { useForm, FormProvider } from 'react-hook-form'
import { useMediaQuery } from "@/hooks/use-media-query";
import { FormError } from '@/components/ui/form-error'
import { FormSuccess } from '@/components/ui/form-success'

export type Value = unknown

export interface Property {
  [key: string]: Value
}

export interface Data {
  [key: string]: Property | Property[]
}

const Form = (props) => {


  const {
    fields: formFromProps, id: formID, confirmationMessage, confirmationType, redirect, submitButtonLabel, title
  } = props


  const formMethods = useForm({
    defaultValues: buildInitialFormState(formFromProps),
  })

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
  } = formMethods

  const [isLoading, setIsLoading] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState<boolean>()
  const [error, setError] = useState<{ message: string; status?: string } | undefined>()
  const router = useRouter()
  const t = useTranslations()

  const onSubmit = useCallback(
    (data: Data) => {
      let loadingTimerID: ReturnType<typeof setTimeout>
      const submitForm = async () => {
        setError(undefined)

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }))

        // delay loading indicator by 1s
        loadingTimerID = setTimeout(() => {
          setIsLoading(true)
        }, 1000)

        try {
          const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
            body: JSON.stringify({
              form: formID,
              submissionData: dataToSend,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          })

          const res = await req.json()

          clearTimeout(loadingTimerID)

          if (req.status >= 400) {
            setIsLoading(false)

            setError({
              message: res.errors?.[0]?.message || 'Internal Server Error',
              status: res.status,
            })

            return
          }

          setIsLoading(false)
          setHasSubmitted(true)

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect

            const redirectUrl = url

            if (redirectUrl) router.push(redirectUrl)
          }
        } catch (err) {
          console.warn(err)
          setIsLoading(false)
          setError({
            message: 'Something went wrong.',
          })
        }
      }

      void submitForm()
    },

    [router, formID, redirect, confirmationType],
  )

  const sm = useMediaQuery("(max-width: 40rem)");

  return (
    <FormProvider {...formMethods}>

      {!isLoading && hasSubmitted && confirmationType === 'message' && (
        <RichText content={confirmationMessage} className='bg-white text-center text-black text-xl flex justify-center flex-col p-8 min-h-[350px]' />
      )}

      {/* {isLoading && !hasSubmitted && <p>{t('loading')}</p>} */}

      {error && <div>{`${error.status || '500'}: ${error.message || ''}`}</div>}

      {!hasSubmitted && (
        <Card className="bg-transparent border-none ">
          <form id={formID} onSubmit={handleSubmit(onSubmit)} className='space-y-4 '>
            <CardContent className={cn('grid grid-cols-2 gap-2 md:gap-4 p-0')}>
              {formFromProps &&
                formFromProps &&
                formFromProps?.map((field, index) => {
                  const Field: React.FC<any> = fields?.[field.blockType]
                  if (Field) {
                    return (
                      <div key={index}
                        className={cn({
                          'col-span-2': formID === 1 ? index === 0 || index === 3 || index === 4 || index === 5 || index === 6 || index === 7 : index === 0 || index === 7
                        })}
                      >
                        <Field
                          form={formFromProps}
                          {...field}
                          {...formMethods}
                          control={control}
                          errors={errors}
                          register={register}
                        />
                      </div>
                    )
                  }
                  return null
                })}
            </CardContent>

            <CardFooter className='p-0'>
              <Button form={formID} type="submit" color='primary' size={sm ? 'lg' : 'xl'} className="w-full">
                {submitButtonLabel}
              </Button>
            </CardFooter>
          </form>
        </Card>
      )}

    </FormProvider>
  )
}


const TabsForm = ({ form }) => {

  const title = form[0].title

  return (
    <Tabs defaultValue={title} className="w-full md:w-[480px]">
      <TabsList className="grid w-full grid-cols-2 rounded-none p-0 h-11 bg-[#FFFFFF33]">
        {
          form.map((item) => {
            return (
              <TabsTrigger key={item.id} value={item.title} className='data-[state=active]:bg-primary data-[state=active]:text-black bg-transparent text-white uppercase font-semibold rounded-none hover:bg-primary/90 hover:text-black h-11 cursor-pointer text-sm'>{item.title}</TabsTrigger>
            )
          })
        }
      </TabsList>
      {
        form.map((item) => {
          return (
            <TabsContent key={item.id} value={item.title} className='bg-[#FFFFFF33] p-4 md:p-6 mt-0'>
              <Form {...item} />
            </TabsContent>
          )
        })
      }
    </Tabs>
  )
}

export default TabsForm