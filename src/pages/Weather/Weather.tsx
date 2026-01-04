import { OverlaedForm } from '@/components/ui/OverlaedForm'
import { Slider } from '@/components/ui/Slider'
import { useActions } from '@/hooks/useActions'
import { useOutside } from '@/hooks/useOutside'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useLazyGetForecastQuery } from '@/store/api/weatherApi.slice'
import classNames from 'classnames'
import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react'
import type { SwiperClass } from 'swiper/react'
import styles from './Weather.module.css'

const Weather = () => {
  const titleId = 'weather'

  const { cities, activeCityIndex } = useTypedSelector((state) => state.cities)
  const { changeActiveCity, addCity } = useActions()
  const [getForecast] = useLazyGetForecastQuery()

  const [formFieldValue, setFormFieldValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isFormLoading, setIsFormLoading] = useState<boolean>(false)

  const [sliderInstans, setSliderInstans] = useState<SwiperClass | null>(null)

  const {
    ref: formRef,
    isShow: isShowForm,
    setIsShow: setIsShowForm,
  } = useOutside<HTMLFormElement>(false)

  useEffect(() => {
    sliderInstans?.slideTo(activeCityIndex)
  }, [activeCityIndex, sliderInstans])

  const onFormFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormFieldValue(event.target.value)
  }

  const onFormSubmitFunction = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsFormLoading(true)
    try {
      const isInTheListOfCities = cities.some((city) => city === formFieldValue)

      if (isInTheListOfCities) {
        throw new Error('Этот город уже добавлен')
      }

      await getForecast({ city: formFieldValue }).unwrap()

      addCity(formFieldValue)
      setFormFieldValue('')
      setIsShowForm(false)
      setErrorMessage('')
      setIsFormLoading(false)
      changeActiveCity(cities.length)
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

  const onAddFuction = () => {
    setIsShowForm(true)
  }

  const onCloseFormButtonClick = () => {
    setFormFieldValue('')
    setIsShowForm(false)
    setErrorMessage('')
  }

  const onPrevButtonClick = () => {
    changeActiveCity(activeCityIndex - 1)
  }

  const onNextButtonClick = () => {
    changeActiveCity(activeCityIndex + 1)
  }

  const onPaginationBulletButtonClick = (activateCityIndex: number) => {
    changeActiveCity(activateCityIndex)
  }

  return (
    <section className='section' aria-labelledby={titleId}>
      <h1 className='visually-hidden' id={titleId}>
        Weather
      </h1>
      <div className={classNames(styles.body)}>
        <Slider
          className='weather-slider'
          sliderParams={{
            slidesPerView: 'auto',
            hasPagination: true,
            hasNavigation: true,
            sliderCards: cities,
            initialSlideIndex: activeCityIndex,
            activeSlideIndex: activeCityIndex,
            changeActiveSlideFunction: changeActiveCity,
            onAddButtonFunction: onAddFuction,
            onNextCLick: onNextButtonClick,
            onPrevCLick: onPrevButtonClick,
            onPaginationBulletCLick: onPaginationBulletButtonClick,
            swiperInstansSetter: setSliderInstans,
          }}
        />
      </div>
      <OverlaedForm
        value={formFieldValue}
        setValueFunction={onFormFieldChange}
        onSubmitFunction={onFormSubmitFunction}
        onCloseFunction={onCloseFormButtonClick}
        errorMessage={errorMessage}
        isLoading={isFormLoading}
        isShow={isShowForm}
        formRef={formRef}
      />
    </section>
  )
}

export { Weather }
