import type { LucideIcon } from 'lucide-react'

interface ButtonProps {
  label: string | LucideIcon
  onClickFunction?: () => void
  type: 'button' | 'submit'
  isLoading?: boolean
  className?: string
}

export type { ButtonProps }
