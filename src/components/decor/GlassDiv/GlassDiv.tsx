import classNames from 'classnames'
import styles from './GlassDiv.module.css'
import type { GlassDivProps } from './GlassDiv.types'

const GlassDiv = (props: GlassDivProps) => {
  const { children, className, hasCircles = false, tabIndex = 0, ref } = props

  return (
    <div
      ref={ref}
      className={classNames(styles.glassDiv, className, {
        [styles.hasCircles]: hasCircles,
      })}
      tabIndex={tabIndex}
    >
      {children}
    </div>
  )
}

export { GlassDiv }
