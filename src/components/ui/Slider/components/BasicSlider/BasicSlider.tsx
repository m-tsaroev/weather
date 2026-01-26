import classNames from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './BasicSlider.module.css'
import type { BasicSliderProps } from './BasicSlider.types'

const BasicSlider = (props: BasicSliderProps) => {
  const {
    slidesPerView,
    initialSlideIndex,
    hasAllowTouchMove = true,
    hasSimulateTouch = true,
    spaceBetween = 10,
    className,
    children,
  } = props

  return (
    <div className={classNames(styles.slider, className)}>
      <Swiper
        simulateTouch={hasSimulateTouch}
        allowTouchMove={hasAllowTouchMove}
        slidesPerView={slidesPerView}
        initialSlide={initialSlideIndex}
        spaceBetween={spaceBetween}
      >
        {children?.map((slide, index) => (
          <SwiperSlide className={styles.forecastDaySlide} key={index}>
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export { BasicSlider }
