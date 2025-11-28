import { Button } from '@/components/ui/Button'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useLazyValidateApiKeyQuery } from '@/store/api/weatherApi.slice'
import classNames from 'classnames'
import { useCallback, useState, type FormEvent } from 'react'
import styles from './Setup.module.css'
import { GlassDiv } from '@/components/decor/GlassDiv'

const Setup = () => {
  const titleId = 'setup'

  const [fieldValue, setFieldValue] = useState<string>('')
  const [isFieldFocus, setIsFieldFocus] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [validateApiKey] = useLazyValidateApiKeyQuery()
  const { setApiKey, deleteApiKey } = useActions()
  const { hasValidApiKey } = useTypedSelector((store) => store.apiKey)

  const onChangeFieldValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue(event.target.value)
  }

  const onAddButtonClick = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!fieldValue) {
        setApiKey({
          valid: false,
        })
        return
      }

      setIsLoading(true)

      try {
        const result = await validateApiKey(fieldValue).unwrap()

        setApiKey({
          valid: result.valid,
          apiKey: fieldValue,
        })
        setIsError(false)
        setIsLoading(false)
        setIsFieldFocus(false)
      } catch {
        setIsError(true)
      } finally {
        setIsLoading(false)
        setFieldValue('')
      }
    },
    [fieldValue, validateApiKey, setApiKey],
  )

  const onDeleteButtonClick = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      deleteApiKey()
    },
    [deleteApiKey],
  )

  return (
    <section className={styles.section} aria-labelledby={titleId}>
      <GlassDiv hasCircles={true} className={styles.body}>
        <h1 className={styles.title} id={titleId}>
          Настройка
        </h1>
        {!hasValidApiKey ? (
          <p className={styles.subtitle}>
            Введить API ключ из своего профиля с сайта{' '}
            <a href='https://weatherapi.com' target='_blank'>
              weatherapi.com
            </a>
          </p>
        ) : (
          <p className={styles.subtitle}>
            Вы можете удалить ваш сохраненный API ключ
          </p>
        )}

        {isError && (
          <p className={styles.errorMessage}>
            Ваш API ключ некорректный или он устарел
          </p>
        )}
        <form
          className={styles.form}
          onSubmit={!hasValidApiKey ? onAddButtonClick : onDeleteButtonClick}
        >
          {!hasValidApiKey && (
            <>
              <div className={styles.field}>
                <label
                  className={classNames(styles.label, {
                    [styles.labelShrink]: fieldValue || isFieldFocus,
                    [styles.labelColor]: isFieldFocus,
                  })}
                  htmlFor='api-key'
                >
                  API ключ
                </label>
                <input
                  type='password'
                  className={styles.input}
                  value={fieldValue}
                  onChange={onChangeFieldValue}
                  onFocus={() => setIsFieldFocus(true)}
                  onBlur={() => setIsFieldFocus(false)}
                  id='api-key'
                  placeholder=' '
                  autoComplete='off'
                />
              </div>

              <Button
                lable={isLoading ? 'Loading...' : 'Add key'}
                className={styles.button}
                type='submit'
              />
            </>
          )}
          {hasValidApiKey && (
            <Button
              lable='Delete key'
              className={styles.button}
              type='submit'
            />
          )}
        </form>
      </GlassDiv>
    </section>
  )
}

export { Setup }
