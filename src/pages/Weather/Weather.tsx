import { AddCityButton } from '@/components/ui/AddCityButton'
import { OverlaedForm } from '@/components/ui/OverlaedForm'
import { Select } from '@/components/ui/Select'
import { Slider } from '@/components/ui/Slider'
import { WeatherCard } from '@/components/ui/WeatherCard'
import { WeatherDisplayTypeBLock } from '@/components/ui/WeatherDisplayTypeBLock'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { useLazyGetForecastQuery } from '@/store/api/weatherApi.slice'
import classNames from 'classnames'
import { Building2 } from 'lucide-react'
import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react'
import { SwiperSlide, type SwiperClass } from 'swiper/react'
import styles from './Weather.module.css'

const Weather = () => {
  const titleId = 'weather'

  const { cities, activeCityIndex, activeCityName } = useTypedSelector(
    (state) => state.cities,
  )
  const { isSelectDisplayType, isSliderDisplayType, isTabsDisplayType } =
    useTypedSelector((state) => state.weatherDisplayTypes)

  const { changeActiveCity, addCity, activateModal, disactivateModal } =
    useActions()
  const [getForecast] = useLazyGetForecastQuery()

  const [formFieldValue, setFormFieldValue] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isFormLoading, setIsFormLoading] = useState<boolean>(false)

  const [sliderInstans, setSliderInstans] = useState<SwiperClass | null>(null)

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
      disactivateModal('isShowAddWeatherFormModal')
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
    activateModal('isShowAddWeatherFormModal')
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

  const [swiperKey, setSwiperKey] = useState(0)
  const prevCitiesLength = useRef(cities.length)

  useEffect(() => {
    if (cities.length !== prevCitiesLength.current) {
      setSwiperKey((prev) => prev + 1)
      prevCitiesLength.current = cities.length
    }
  }, [cities.length])

  return (
    <section className='section' aria-labelledby={titleId}>
      <WeatherDisplayTypeBLock />
      <h1 className='visually-hidden' id={titleId}>
        Weather
      </h1>
      <div className={classNames(styles.body)}>
        {isSelectDisplayType && (
          <Select
            name='weather-card'
            hasSelection={false}
            value={<Building2 />}
            options={[
              ...cities.map((city, index) => {
                return {
                  name: city,
                  optionFunction: () => {
                    changeActiveCity(index)
                  },
                }
              }),
              {
                name: '+',
                optionFunction: onAddFuction,
                mode: 'border',
              },
            ]}
            tabIndex={0}
            className={styles.select}
          />
        )}
        {cities.length === 0 ? (
          <AddCityButton onClickFunction={onAddFuction} side='right' />
        ) : isSliderDisplayType ? (
          <Slider
            key={`slider-${swiperKey}`}
            className='weather-slider'
            slidesCardsCount={cities.length}
            sliderParams={{
              mode: 'custom',
              slidesPerView: 'auto',
              hasPagination: true,
              hasNavigation: true,
              initialSlideIndex: activeCityIndex,
              hasSimulateTouch: false,
              hasAllowTouchMove: false,
              activeSlideIndex: activeCityIndex,
              changeActiveSlideFunction: changeActiveCity,
              onAddButtonFunction: onAddFuction,
              onNextCLick: onNextButtonClick,
              onPrevCLick: onPrevButtonClick,
              onPaginationBulletCLick: onPaginationBulletButtonClick,
              swiperInstansSetter: setSliderInstans,
            }}
          >
            {cities.map((city) => (
              <SwiperSlide
                style={{
                  display: 'flex',
                  justifyContent: 'center   ',
                }}
                key={city}
              >
                <WeatherCard city={city} isActive={city === activeCityName} />
              </SwiperSlide>
            ))}
          </Slider>
        ) : isSelectDisplayType ? (
          cities.map(
            (city) =>
              city === activeCityName && (
                <WeatherCard
                  city={city}
                  isActive={city === activeCityName}
                  key={city}
                />
              ),
          )
        ) : (
          isTabsDisplayType && <h1>СДЕЛАЙ ТАБЫ!!!</h1>
        )}
      </div>
      <OverlaedForm
        value={formFieldValue}
        setValueFunction={onFormFieldChange}
        onSubmitFunction={onFormSubmitFunction}
        errorMessage={errorMessage}
        isLoading={isFormLoading}
        overlayModalName='AddForm'
      />
    </section>
  )
}

export { Weather }
