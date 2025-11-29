import classNames from 'classnames'
import styles from './Button.module.css'
import type { ButtonProps } from './Button.types'

const Button = (props: ButtonProps) => {
  const { lable, className, onClickFunction, type } = props

  return (
    <button
      onClick={onClickFunction}
      className={classNames(className, styles.button)}
      type={type}
    >
      {lable}
    </button>
  )
}

export { Button }
