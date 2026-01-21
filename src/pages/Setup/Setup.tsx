import { GlassDiv } from '@/components/decor/GlassDiv'
import { Button } from '@/components/ui/Button'
import { Field } from '@/components/ui/Field'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useLazyValidateApiKeyQuery } from '@/store/api/weatherApi.slice'
import { useCallback, useState, type FormEvent } from 'react'
import styles from './Setup.module.css'

const Setup = () => {
  const titleId = 'setup'

  const [fieldValue, setFieldValue] = useState<string>('')
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
        const result = await validateApiKey({ apiKey: fieldValue }).unwrap()

        setApiKey({
          valid: result.valid,
          apiKey: fieldValue,
        })
        setIsError(false)
        setIsLoading(false)
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
    <section className='section' aria-labelledby={titleId}>
      <GlassDiv hasCircles className={styles.body}>
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
              <Field
                value={fieldValue}
                setValueFunction={onChangeFieldValue}
                label='API ключ'
                id='api-key'
                type='password'
              />

              <Button
                label={isLoading ? 'Loading...' : 'Add key'}
                className={styles.button}
                type='submit'
              />
            </>
          )}
          {hasValidApiKey && (
            <Button
              label='Delete key'
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
