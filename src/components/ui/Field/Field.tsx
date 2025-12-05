import classNames from 'classnames'
import styles from './Field.module.css'
import type { FieldProps } from './Field.types'
import { useState } from 'react'

const Field = (props: FieldProps) => {
  const { value, setValueFunction, label, id, type, className } = props

  const [isFieldFocus, setIsFieldFocus] = useState<boolean>(false)

  return (
    <div className={classNames(styles.field, className)}>
      <label
        className={classNames(styles.label, {
          [styles.labelShrink]: value || isFieldFocus,
          [styles.labelColor]: isFieldFocus,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      <input
        type={type}
        className={styles.input}
        value={value}
        onChange={setValueFunction}
        onFocus={() => setIsFieldFocus(true)}
        onBlur={() => setIsFieldFocus(false)}
        id={id}
        placeholder=' '
        autoComplete='off'
      />
    </div>
  )
}

export { Field }
