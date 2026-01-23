import type { ReactNode } from 'react'

interface Option {
  name: string
  optionFunction?: () => void
  isCUrrent?: boolean
  isSelected?: boolean
  mode?: 'red' | 'border'
}

interface SelectProps {
  name: string
  hasSelection: boolean
  hasHover?: boolean
  value?: string | ReactNode
  closeValue?: string | ReactNode
  options: Option[]
  tabIndex?: number
  dropdownSide?: 'left' | 'center' | 'right'
  className: string
}

export type { Option, SelectProps }
