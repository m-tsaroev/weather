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
    setIsShow: setIsShowBlock,
    isClickOutside,
  } = useOutside<HTMLDivElement>(false)

  const { isShowWeatherDisplayTypeModal } = useTypedSelector(
    (state) => state.modalWindows,
  )
  const { disactivateModal, activateDisplayType } = useActions()

  const onCloseFunction = () => {
    disactivateModal('isShowWeatherDisplayTypeModal')
  }

  useEffect(() => {
    if (isClickOutside) {
      disactivateModal('isShowWeatherDisplayTypeModal')
    }
  }, [isClickOutside, disactivateModal])

  useEffect(() => {
    setIsShowBlock(isShowWeatherDisplayTypeModal)
  }, [setIsShowBlock, isShowWeatherDisplayTypeModal])

  const onSliderChooseButtonClick = () => {
    activateDisplayType('isSliderDisplayType')
    setIsShowBlock(false)
    disactivateModal('isShowWeatherDisplayTypeModal')
  }

  const onSelectChooseButtonClick = () => {
    activateDisplayType('isSelectDisplayType')
    setIsShowBlock(false)
    disactivateModal('isShowWeatherDisplayTypeModal')
  }

  const onTabsChooseButtonClick = () => {
    activateDisplayType('isTabsDisplayType')
    setIsShowBlock(false)
    disactivateModal('isShowWeatherDisplayTypeModal')
  }

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
            <Button
              label='Select'
              onClickFunction={onSelectChooseButtonClick}
              type='button'
              className={styles.button}
            />
            <Button
              label='Slider'
              onClickFunction={onSliderChooseButtonClick}
              type='button'
              className={styles.button}
            />
            <Button
              label='Tabs'
              onClickFunction={onTabsChooseButtonClick}
              type='button'
              className={styles.button}
            />
          </GlassDiv>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { WeatherDisplayTypeBLock }
