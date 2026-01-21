import { GlassDiv } from '@/components/decor/GlassDiv'
import { Button } from '@/components/ui/Button'
import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import styles from './WeatherDisplayTypeBLock.module.css'

const WeatherDisplayTypeBLock = () => {
  const {
    ref: blockRef,
    isShow: isShowBlock,
    setIsShow: setisShowBlock,
    isClickOutside,
  } = useOutside<HTMLDivElement>(false)

  const { isShowWeatherDisplayTypeModal } = useTypedSelector(
    (state) => state.modalWindows,
  )
  const { disactivateModal } = useActions()

  const onCloseFunction = () => {
    disactivateModal('isShowWeatherDisplayTypeModal')
  }

  useEffect(() => {
    if (isClickOutside) {
      disactivateModal('isShowWeatherDisplayTypeModal')
    }
  }, [isClickOutside, disactivateModal])

  useEffect(() => {
    setisShowBlock(isShowWeatherDisplayTypeModal)
  }, [setisShowBlock, isShowWeatherDisplayTypeModal])

  return (
    <AnimatePresence>
      {isShowBlock && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={styles.overlay}
        >
          <GlassDiv className={styles.block} ref={blockRef}>
            <button
              onClick={onCloseFunction}
              type='button'
              className={styles.closeCross}
            >
              <Plus />
            </button>
            <Button label='Select' type='button' className={styles.button} />
            <Button label='Slider' type='button' className={styles.button} />
            <Button label='Tabs' type='button' className={styles.button} />
          </GlassDiv>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { WeatherDisplayTypeBLock }
