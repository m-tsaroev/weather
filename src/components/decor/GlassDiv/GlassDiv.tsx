import classNames from 'classnames'
import { motion } from 'motion/react'
import styles from './GlassDiv.module.css'
import type { GlassDivProps } from './GlassDiv.types'

const GlassDiv = (props: GlassDivProps) => {
  const {
    children,
    className,
    hasCircles = false,
    tabIndex = 0,
    role,
    onClick,
    ref,
    motionParams,
  } = props

  return (
    <motion.div
      {...motionParams}
      ref={ref}
      className={classNames(styles.glassDiv, className, {
        [styles.hasCircles]: hasCircles,
      })}
      tabIndex={tabIndex}
      onClick={onClick}
      role={role}
    >
      {children}
    </motion.div>
  )
}

export { GlassDiv }
