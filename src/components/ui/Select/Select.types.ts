import type { ReactNode } from 'react'

interface Option {
  name: string
  optionFunction?: () => void
  isCUrrent?: boolean
  isSelected?: boolean
  mode?: 'red'
}

interface SelectProps {
  name: string
  hasSelection: boolean
  value?: string | ReactNode
  closeValue?: string | ReactNode
  options: Option[]
  tabIndex: number
  className: string
}

export type { Option, SelectProps }
