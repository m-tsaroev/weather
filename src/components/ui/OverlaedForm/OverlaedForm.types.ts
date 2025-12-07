import type { ChangeEvent, FormEvent, RefObject } from 'react'

interface OverlaedFormProps {
  value: string
  setValueFunction: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmitFunction: (event: FormEvent<HTMLFormElement>) => void
  onCloseFunction: () => void
  errorMessage: string
  isLoading: boolean
  isShow: boolean
  formRef: RefObject<HTMLFormElement | null>
  className?: string
}

export type { OverlaedFormProps }
