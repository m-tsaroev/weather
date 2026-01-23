import { GlassDiv } from '@/components/decor/GlassDiv'
import { DetailsCard } from '@/components/ui/DetailsCard'
import { OverlaedForm } from '@/components/ui/OverlaedForm'
import { Select } from '@/components/ui/Select'
import { Spinner } from '@/components/ui/Spinner'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useWeatherIcon } from '@/hooks/useWeatherIcon'
import { useLazyGetForecastQuery } from '@/store/api/weatherApi.slice'
import { Ellipsis } from 'lucide-react'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import styles from './ForcastNow.module.css'
import type { ForcastNowProps } from './ForcastNow.types'

const ForcastNow = (props: ForcastNowProps) => {
  const { id, city, data, isActive, isLoading } = props

  const [formFieldValue, setFormFieldValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isFormLoading, setIsFormLoading] = useState<boolean>(false)

  const { activeCityName, cities } = useTypedSelector((state) => state.cities)
  const { removeCity, renameCity, activateModal, disactivateModal } =
    useActions()

  const [getForecast] = useLazyGetForecastQuery()

  const onFormFiledValueFunction = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setFormFieldValue(value)
  }

  const onRemoveButtonClick = () => {
    removeCity(city)
  }

  const onRenameFormOpenButtonClick = () => {
    activateModal({ isShowRenameWeatherFormModalIndex: id })
  }

  const onRenameButtonClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsFormLoading(true)

    try {
      const isInTheListOfCities = cities.some((city) => city === formFieldValue)

      if (isInTheListOfCities) {
        throw new Error('Этот город уже добавлен')
      }

      await getForecast({ city: formFieldValue }).unwrap()

      renameCity({ cityName: city, newCityName: formFieldValue })
      setFormFieldValue('')
      disactivateModal('isShowRenameWeatherFormModalIndex')
      setErrorMessage('')
      setIsFormLoading(false)
    } catch (error) {
      if (
        typeof error === 'object' &&
        error !== null &&
        'status' in error &&
        'data' in error
      ) {
        const err = error as {
          status: number
          data: {
            error: {
              code: number
              message: string
            }
          }
        }

        setErrorMessage(err.data.error.message)
        setIsFormLoading(false)
        return
      }

      if (
        typeof error === 'object' &&
        error !== null &&
        'message' in error &&
        typeof error.message === 'string'
      ) {
        setErrorMessage(error.message)
        setIsFormLoading(false)
      }
    } finally {
      setIsFormLoading(false)
    }
  }

  const Icon = useWeatherIcon(
    data?.current.condition.code,
    data?.current.is_day,
  )

  if (isLoading) {
    return (
      <GlassDiv className={styles.forcastNow} hasCircles={true}>
        <Spinner />
      </GlassDiv>
    )
  }

  return (
    <GlassDiv
      className={styles.forcastNow}
      hasCircles={true}
      tabIndex={isActive ? 0 : -1}
    >
      <OverlaedForm
        id={id}
        value={formFieldValue}
        setValueFunction={onFormFiledValueFunction}
        onSubmitFunction={onRenameButtonClick}
        errorMessage={errorMessage}
        isLoading={isFormLoading}
        overlayModalName='RenameForm'
      />
      <Select
        name='forecast-now'
        hasSelection={false}
        value={<Ellipsis />}
        options={[
          {
            name: 'Изменить',
            optionFunction: onRenameFormOpenButtonClick,
          },
          {
            name: 'Удалить',
            optionFunction: onRemoveButtonClick,
            mode: 'red',
          },
        ]}
        tabIndex={city === activeCityName ? 0 : -1}
        className={styles.select}
      />
      <h2 className={styles.cityName}>{data?.location.name}</h2>
      <div className={styles.body}>
        <div className={styles.temp}>
          {data?.current && Math.round(data?.current.temp_c)}°
        </div>
        <div className={styles.infoGroup}>
          <div className={styles.icon}>
            <Icon />
          </div>
          <div className={styles.text}>{data?.current.condition.text}</div>
        </div>
      </div>
      <ul className={styles.details}>
        <li className={styles.detailsItem}>
          <DetailsCard
            name='Feels like'
            value={`${data?.current.feelslike_c}°`}
          />
        </li>
        <li className={styles.detailsItem}>
          <DetailsCard name='Wind' value={`${data?.current.wind_kph} kph`} />
        </li>
        <li className={styles.detailsItem}>
          <DetailsCard name='Humidity' value={`${data?.current.humidity} %`} />
        </li>
        <li className={styles.detailsItem}>
          <DetailsCard
            name='Pressure'
            value={`${data?.current.pressure_mb} hPa`}
          />
        </li>
      </ul>
    </GlassDiv>
  )
}

export { ForcastNow }
