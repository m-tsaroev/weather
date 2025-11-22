import { Button } from '@/components/ui/Button'
import { useLazyValidateApiKeyQuery } from '@/store/api/weatherApi.slice'
import {
  deleteApiKey,
  getApiKey,
  hasApiKey,
  setApiKey,
} from '@/utils/apiKeys'
import classNames from 'classnames'
import {
  useCallback,
  useEffect,
  useState,
  type FormEvent,
} from 'react'
import styles from './Setup.module.css'

const Setup = () => {
  const titleId = 'setup'

  const [fieldValue, setFieldValue] = useState<string>('')
  const [isFieldFocus, setIsFieldFocus] =
    useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [checkApiKey, { data }] =
    useLazyValidateApiKeyQuery()

  const [validApiKey, setValidApiKey] = useState<boolean>(
    data?.valid || false,
  )

  const onChangeFieldValue = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setFieldValue(event.target.value)
  }

  const onAddButtonClick = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (!fieldValue) {
        setValidApiKey(false)
        return
      }

      setIsLoading(true)

      try {
        const result = await checkApiKey({
          apiKey: fieldValue,
        }).unwrap()

        setApiKey(fieldValue)
        setValidApiKey(result.valid)
        setIsError(false)
        setIsLoading(false)
        setIsFieldFocus(false)
      } catch {
        setIsError(true)
        setIsLoading(false)
      }

      setFieldValue('')
    },
    [fieldValue, checkApiKey],
  )

  const onDeleteButtonClick = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      deleteApiKey()
      setValidApiKey(false)
    },
    [],
  )

  useEffect(() => {
    if (hasApiKey()) {
      checkApiKey({ apiKey: getApiKey() })
    }

    setIsError(!!(hasApiKey() && !data))

    setValidApiKey(data?.valid || false)
  }, [checkApiKey, data])

  return (
    <section
      className={styles.section}
      aria-labelledby={titleId}
    >
      <div className={styles.body}>
        <h1 className={styles.title} id={titleId}>
          Настройка
        </h1>
        {!validApiKey ? (
          <p className={styles.subtitle}>
            Введить API ключ из своего профиля с сайта{' '}
            <a
              href='https://weatherapi.com'
              target='_blank'
            >
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
          onSubmit={
            !validApiKey
              ? onAddButtonClick
              : onDeleteButtonClick
          }
        >
          {!validApiKey && (
            <>
              <div className={styles.field}>
                <label
                  className={classNames(styles.label, {
                    [styles.labelShrink]:
                      fieldValue || isFieldFocus,
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
          {validApiKey && (
            <Button
              lable='Delete key'
              className={styles.button}
              type='submit'
            />
          )}
        </form>
      </div>
    </section>
  )
}

export { Setup }
