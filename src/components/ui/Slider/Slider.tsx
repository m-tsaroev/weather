import { AddCityButton } from '@/components/ui/AddCityButton'
import { WeatherCard } from '@/components/ui/WeatherCard'
import classNames from 'classnames'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/bundle'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Slider.module.css'
import type { SliderProps } from './Slider.types'

const Slider = (props: SliderProps) => {
  const {
    sliderCards,
    initialSlideIndex = 0,
    onAddButtonFunction,
    onNextCLick,
    onPrevCLick,
    swiperInstansSetter,
  } = props
  const [activeSlideIndex, setActiveSlideIndex] = useState<number>(0)

  return (
    <div className={styles.slider}>
      <div className={classNames('pagination-dots', styles.pagination)}></div>

      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView='auto'
        initialSlide={initialSlideIndex}
        onSwiper={swiperInstansSetter}
        onSlideChange={(swiper) => {
          setActiveSlideIndex(swiper.activeIndex)
        }}
        navigation={{
          prevEl: '.prevButton',
          nextEl: '.nextButton',
        }}
        pagination={{
          el: '.pagination-dots',
          bulletClass: styles.pagiantionBullet,
          bulletActiveClass: styles.isActive,
          clickable: true,
        }}
      >
        {sliderCards.map((city, index) => (
          <SwiperSlide className={styles.sliderSlide} key={index}>
            <WeatherCard city={city} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.buttons}>
        <button
          className={classNames('prevButton', styles.prevButton)}
          onClick={onPrevCLick}
        >
          <ArrowLeft />
        </button>

        {activeSlideIndex === sliderCards.length - 1 && (
          <AddCityButton onClickFunction={onAddButtonFunction} side='right' />
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
    </div>
  )
}

export { Slider }
