import type { ChangeEvent, FormEvent } from 'react'

interface OverlaedFormProps {
  value: string
  setValueFunction: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmitFunction: (event: FormEvent<HTMLFormElement>) => void
  onCloseFunction: () => void
  errorMessage: string
  isLoading: boolean
  isShow: boolean
  className?: string
}

export type { OverlaedFormProps }
