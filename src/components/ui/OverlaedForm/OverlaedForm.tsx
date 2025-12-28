import { Button } from '@/components/ui/Button'
import { Field } from '@/components/ui/Field'
import classNames from 'classnames'
import { ArrowRight, Plus } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import styles from './OverlaedForm.module.css'
import type { OverlaedFormProps } from './OverlaedForm.types'

const OverlaedForm = (props: OverlaedFormProps) => {
  const {
    value,
    setValueFunction,
    onSubmitFunction,
    onCloseFunction,
    errorMessage,
    isLoading,
    isShow,
    formRef,
    className,
  } = props

  return (
    <AnimatePresence>
      {isShow && (
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
          className={classNames(styles.overlay, className)}
        >
          <form
            ref={formRef}
            className={styles.form}
            onSubmit={onSubmitFunction}
          >
            <button
              onClick={onCloseFunction}
              type='button'
              className={styles.closeCross}
            >
              <Plus />
            </button>
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
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export { OverlaedForm }
