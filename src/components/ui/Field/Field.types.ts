import type { ChangeEvent } from 'react'

interface FieldProps {
  value: string
  setValueFunction: (event: ChangeEvent<HTMLInputElement>) => void
  label: string
  id: string
  type: string
  className?: string
}

export type { FieldProps }
