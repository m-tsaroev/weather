import { ArrowLeft, ArrowRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/bundle'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './Slider.module.css'
import type { SliderProps } from './Slider.types'
import classNames from 'classnames'

const Slider = (props: SliderProps) => {
  const { sliderCards, initialSlideIndex = 0 } = props

  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={20}
        slidesPerView='auto'
        initialSlide={initialSlideIndex}
        navigation={{
          prevEl: '.prevButton',
          nextEl: '.nextButton',
        }}
      >
        {sliderCards.map((card, index) => (
          <SwiperSlide className={styles.sliderSlide} key={index}>
            {card}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.buttons}>
        <button className={classNames('prevButton', styles.prevButton)}>
          <ArrowLeft />
        </button>
        <button className={classNames('nextButton', styles.nextButton)}>
          <ArrowRight />
        </button>
      </div>
    </div>
  )
}

export { Slider }
