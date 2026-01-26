import { Navigation } from '@/components/ui/Slider/components/Navigation'
import { Pagination } from '@/components/ui/Slider/components/Pagination'
import classNames from 'classnames'
import type SwiperType from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './CustomSlider.module.css'
import type { CustomSliderProps } from './CustomSlider.types'

const CustomSlider = (props: CustomSliderProps) => {
  const {
    slidesPerView,
    spaceBetween,
    initialSlideIndex,
    hasPagination,
    hasNavigation,
    hasAllowTouchMove = true,
    hasSimulateTouch = true,
    changeActiveSlideFunction,
    instansSetter,
    onNextCLick,
    onPrevCLick,
    className,
    navigationParams,
    children,
  } = props

  const onSwiperSlideChange = (swiper: SwiperType) => {
    changeActiveSlideFunction?.(swiper.activeIndex)
  }

  return (
    <div className={classNames(styles.slider, className)}>
      <Swiper
        className={styles.container}
        onSwiper={instansSetter}
        simulateTouch={hasSimulateTouch}
        allowTouchMove={hasAllowTouchMove}
        slidesPerView={slidesPerView}
        initialSlide={initialSlideIndex}
        onSlideChange={onSwiperSlideChange}
        spaceBetween={spaceBetween}
      >
        {hasPagination && <Pagination />}
        {children?.map((slide, index) => (
          <SwiperSlide
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
            key={index}
          >
            {slide}
          </SwiperSlide>
        ))}
        {hasNavigation && (
          <Navigation
            additionalFunctionToPrev={onPrevCLick}
            additionalFunctionToNext={onNextCLick}
            params={navigationParams}
          />
        )}
      </Swiper>
    </div>
  )
}

export { CustomSlider }
