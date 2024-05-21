'use client'
import { useFormState } from 'react-dom'
import React, { useEffect, type FC } from 'react'
import { useToast } from '@/components/ui/use-toast'
import { actionFunction } from '@/utils/types'

const f = '⇒ FormContainer.tsx (FormContainer):'

const initialState = {
  message: '',
}

type FormContainerProps = Readonly<{
  action: actionFunction
  children: React.ReactNode
}>

const FormContainer: FC<FormContainerProps> = ({ action, children }) => {
  const [state, formAction] = useFormState(action, initialState)
  const { toast } = useToast()

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message })
    }
  }, [state])

  return <form action={formAction}>{children}</form>
}
export default FormContainer
