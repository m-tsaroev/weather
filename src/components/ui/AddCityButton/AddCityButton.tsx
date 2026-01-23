import classNames from 'classnames'
import { Plus } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './AddCityButton.module.css'
import type { AddCityButtonProps } from './AddCityButton.types'

const AddCityButton = (props: AddCityButtonProps) => {
  const { onClickFunction, className, side = 'left', mode } = props

  return (
    <motion.button
      className={classNames(className, styles.button, styles[side], {
        [styles.forTabs]: mode === 'for-tabs',
      })}
      onClick={onClickFunction}
      initial={{
        translateX: side === 'left' ? -100 : 100,
      }}
      animate={{
        translateX: 0,
      }}
      transition={{
        type: 'tween',
        duration: 0.2,
      }}
      whileHover={{
        backgroundColor: '#ffffff20',
      }}
    >
      <Plus />
    </motion.button>
  )
}

export { AddCityButton }
