import { AddCityButton } from '@/components/ui/AddCityButton'
import classNames from 'classnames'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type SwiperType from 'swiper'
import 'swiper/css'
import 'swiper/css/bundle'
import { Swiper } from 'swiper/react'
import styles from './Slider.module.css'
import type { SliderProps } from './Slider.types'

const Slider = (props: SliderProps) => {
  const { className, children, slidesCardsCount, sliderParams } = props

  const {
    mode,
    hasNavigation,
    hasPagination,
    slidesPerView = 'auto',
    initialSlideIndex = 0,
  } = sliderParams

  if (mode === 'custom') {
    const {
      hasAllowTouchMove = true,
      hasSimulateTouch = true,
      activeSlideIndex,
      changeActiveSlideFunction,
      onAddButtonFunction,
      onNextCLick,
      onPrevCLick,
      onPaginationBulletCLick,
      swiperInstansSetter,
    } = sliderParams

    const onSwiperSlideChange = (swiper: SwiperType) => {
      changeActiveSlideFunction?.(swiper.activeIndex)
    }

    return (
      <div className={classNames(styles.slider, className)}>
        {hasPagination && (
          <div className={styles.pagination}>
            {[...Array(slidesCardsCount).keys()].map((index) => (
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
          simulateTouch={hasSimulateTouch}
          allowTouchMove={hasAllowTouchMove}
          slidesPerView={slidesPerView}
          initialSlide={initialSlideIndex}
          onSwiper={swiperInstansSetter}
          onSlideChange={onSwiperSlideChange}
        >
          {children}
        </Swiper>

        {hasNavigation && (
          <div className={styles.buttons}>
            <button
              className={classNames('prevButton', styles.prevButton, {
                'visually-hidden': slidesCardsCount === 1,
              })}
              disabled={activeSlideIndex === 0}
              onClick={onPrevCLick}
            >
              <ArrowLeft />
            </button>

            {activeSlideIndex === slidesCardsCount - 1 &&
              onAddButtonFunction && (
                <AddCityButton
                  className={classNames({
                    [styles.toLeft]: slidesCardsCount === 1,
                  })}
                  onClickFunction={onAddButtonFunction}
                  side='right'
                />
              )}
            <button
              className={classNames('nextButton', styles.nextButton, {
                'visually-hidden': activeSlideIndex === slidesCardsCount - 1,
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
  if (mode === 'basic') {
    const {
      slidesPerView,
      initialSlideIndex,
      hasAllowTouchMove = true,
      hasSimulateTouch = true,
      spaceBetween = 10,
    } = sliderParams

    return (
      <div className={classNames(styles.slider, className)}>
        <Swiper
          simulateTouch={hasSimulateTouch}
          allowTouchMove={hasAllowTouchMove}
          slidesPerView={slidesPerView}
          initialSlide={initialSlideIndex}
          spaceBetween={spaceBetween}
        >
          {children}
        </Swiper>
      </div>
    )
  }
}

export { Slider }
