import { AddCityButton } from '@/components/ui/AddCityButton'
import { WeatherCard } from '@/components/ui/WeatherCard'
import classNames from 'classnames'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Slider.module.css'
import type { SliderProps } from './Slider.types'

const Slider = (props: SliderProps) => {
  const { className, sliderParams } = props

  const {
    slidesPerView = 'auto',
    hasPagination,
    hasNavigation,
    sliderCards,
    initialSlideIndex = 0,
    activeSlideIndex,
    changeActiveSlideFunction,
    onAddButtonFunction,
    onNextCLick,
    onPrevCLick,
    onPaginationBulletCLick,
    swiperInstansSetter,
  } = sliderParams

  return (
    <div className={classNames(styles.slider, className)}>
      {hasPagination && (
        <div className={styles.pagination}>
          {sliderCards.map((_, index) => (
            <div
              className={classNames(styles.pagiantionBullet, {
                [styles.isActive]: index === activeSlideIndex,
              })}
              onClick={() => {
                onPaginationBulletCLick?.(index)
              }}
              key={index}
            ></div>
          ))}
        </div>
      )}

      <Swiper
        spaceBetween={20}
        slidesPerView={slidesPerView}
        initialSlide={initialSlideIndex}
        onSwiper={swiperInstansSetter}
        onSlideChange={(swiper) => {
          changeActiveSlideFunction?.(swiper.activeIndex)
        }}
      >
        {sliderCards.map((city, index) => (
          <SwiperSlide className={styles.sliderSlide} key={index}>
            <WeatherCard city={city} />
          </SwiperSlide>
        ))}
      </Swiper>

      {hasNavigation && (
        <div className={styles.buttons}>
          <button
            className={classNames('prevButton', styles.prevButton)}
            disabled={activeSlideIndex === 0}
            onClick={onPrevCLick}
          >
            <ArrowLeft />
          </button>

          {activeSlideIndex === sliderCards.length - 1 &&
            onAddButtonFunction && (
              <AddCityButton
                onClickFunction={onAddButtonFunction}
                side='right'
              />
            )}
          <button
            className={classNames('nextButton', styles.nextButton, {
              'visually-hidden': activeSlideIndex === sliderCards.length - 1,
            })}
            onClick={onNextCLick}
          >
            <ArrowRight />
          </button>
        </div>
      )}
    </div>
  )
}

export { Slider }
