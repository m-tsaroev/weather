import classNames from 'classnames'
import styles from './GlassDiv.module.css'
import type { GlassDivProps } from './GlassDiv.types'

const GlassDiv = (props: GlassDivProps) => {
  const { children, className, hasCircles = false } = props

  return (
    <div
      className={classNames(styles.glassDiv, className, {
        [styles.hasCircles]: hasCircles,
      })}
    >
      {children}
    </div>
  )
}

export { GlassDiv }
