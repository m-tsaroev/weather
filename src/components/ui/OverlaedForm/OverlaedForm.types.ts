import type { ChangeEvent, FormEvent } from 'react'

interface OverlaedFormProps {
  id: number
  value: string
  setValueFunction: (event: ChangeEvent<HTMLInputElement>) => void
  onSubmitFunction: (event: FormEvent<HTMLFormElement>) => void
  errorMessage: string
  isLoading: boolean
  className?: string
  overlayModalName: 'AddForm' | 'RenameForm' | 'WeatherDisplayTypes'
}

export type { OverlaedFormProps }
