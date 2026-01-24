import { LoaderCircle } from 'lucide-react'
import styles from './Spinner.module.css'
import type { SpinnerProps } from './Spinner.types'

const Spinner = (props: SpinnerProps) => {
  const { size } = props

  return (
    <div className={styles.spinner}>
      <LoaderCircle size={size ?? 90} />
    </div>
  )
}

export { Spinner }
