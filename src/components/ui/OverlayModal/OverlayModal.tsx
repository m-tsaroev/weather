import { GlassDiv } from '@/components/decor/GlassDiv'
import { OVERLAY_MODALS } from '@/config/overlayModals'
import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useState, type KeyboardEvent } from 'react'
import styles from './OverlayModal.module.css'
import type { OverlayModalProps } from './OverlayModal.types'

const OverlayModal = (props: OverlayModalProps) => {
  const { id, overlayName, children } = props

  const {
    ref: blockRef,
    isShow: isShowBlock,
    setIsShow: setIsShowBlock,
    isClickOutside,
  } = useOutside<HTMLDivElement>(false)

  const {
    isShowWeatherDisplayTypeModal,
    isShowAddWeatherFormModal,
    isShowRenameWeatherFormModalIndex,
  } = useTypedSelector((state) => state.modalWindows)
  const { disactivateModal } = useActions()

  const [isShowModal, setIsShowModal] = useState<boolean>(false)

  useEffect(() => {
    if (overlayName === 'AddForm') {
      setIsShowModal(isShowAddWeatherFormModal)
    } else if (overlayName === 'RenameForm') {
      setIsShowModal(isShowRenameWeatherFormModalIndex === id)
    } else if (overlayName === 'WeatherDisplayTypes') {
      setIsShowModal(isShowWeatherDisplayTypeModal)
    }
  }, [
    isShowWeatherDisplayTypeModal,
    isShowAddWeatherFormModal,
    isShowRenameWeatherFormModalIndex,
    overlayName,
    id,
  ])

  useEffect(() => {
    if (isClickOutside) {
      disactivateModal('isShowWeatherDisplayTypeModal')
    }
  }, [isClickOutside, disactivateModal])

  useEffect(() => {
    if (isClickOutside) {
      disactivateModal(OVERLAY_MODALS[overlayName])
    }
  }, [isClickOutside, disactivateModal, overlayName])

  useEffect(() => {
    setIsShowBlock(isShowModal)
  }, [setIsShowBlock, isShowModal])

  const onCloseFunction = () => {
    disactivateModal(OVERLAY_MODALS[overlayName])
  }

  const onModalEscapeKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const { code } = event
  
    if (code === 'Escape') {
      onCloseFunction()
    }
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
          onKeyDown={onModalEscapeKeyDown}
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
            {children}
          </GlassDiv>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { OverlayModal }
