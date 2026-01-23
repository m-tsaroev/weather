import { Spinner } from '@/components/ui/Spinner'
import classNames from 'classnames'
import type { LucideIcon } from 'lucide-react'
import styles from './Button.module.css'
import type { ButtonProps } from './Button.types'

const Button = (props: ButtonProps) => {
  const { label, className, onClickFunction, isLoading, type } = props

  const Icon: LucideIcon | null = typeof label !== 'string' ? label : null

  return (
    <button
      onClick={onClickFunction}
      className={classNames(className, styles.button)}
      type={type}
    >
      {isLoading ? <Spinner /> : Icon !== null ? <Icon /> : `${label}`}
    </button>
  )
}

export { Button }
