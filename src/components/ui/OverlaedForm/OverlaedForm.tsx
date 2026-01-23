import { Button } from '@/components/ui/Button'
import { Field } from '@/components/ui/Field'
import { OverlayModal } from '@/components/ui/OverlayModal'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import styles from './OverlaedForm.module.css'
import type { OverlaedFormProps } from './OverlaedForm.types'

const OverlaedForm = (props: OverlaedFormProps) => {
  const {
    value,
    setValueFunction,
    onSubmitFunction,
    errorMessage,
    isLoading,
    overlayModalName,
  } = props

  return (
    <OverlayModal overlayName={overlayModalName}>
      <form className={styles.form} onSubmit={onSubmitFunction}>
        {errorMessage && (
          <motion.p
            initial={{
              scale: 1.5,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 1.5,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className={styles.errorMessage}
          >
            {errorMessage}
          </motion.p>
        )}
        <div className={styles.formGroup}>
          <Field
            value={value}
            setValueFunction={setValueFunction}
            label='Название города'
            id='city-name'
            type='text'
            className={styles.field}
            autoFocus
          />
          <Button
            label={ArrowRight}
            type='submit'
            className={styles.submit}
            isLoading={isLoading}
          />
        </div>
      </form>
    </OverlayModal>
  )
}

export { OverlaedForm }
