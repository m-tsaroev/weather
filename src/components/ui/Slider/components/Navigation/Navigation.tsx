import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useSwiper } from 'swiper/react'
import styles from './Navigation.module.css'
import type { NavigationProps } from './Navigation.types'

const Navigation = (props: NavigationProps) => {
  const { additionalFunctionToNext, additionalFunctionToPrev, params } = props

  const swiper = useSwiper()

  const onPrevButtonClick = () => {
    additionalFunctionToPrev?.()

    swiper.slidePrev()
  }

  const onNextButtonClick = () => {
    additionalFunctionToNext?.()

    return swiper.slideNext()
  }

  return (
    <div className={styles.buttons}>
      {params?.additionalElementsParams?.position === 'start' &&
        params?.additionalElementsParams.additionalElements}
      {!params?.hidePrevButton && (
        <button
          className={styles.prevButton}
          disabled={swiper.activeIndex === 0}
          onClick={onPrevButtonClick}
        >
          <ArrowLeft />
        </button>
      )}
      {params?.additionalElementsParams?.position === 'center' &&
        params?.additionalElementsParams.additionalElements}
      {!params?.hideNextButton && (
        <button
          className={styles.nextButton}
          disabled={swiper.activeIndex === swiper.slides.length - 1}
          onClick={onNextButtonClick}
        >
          <ArrowRight />
        </button>
      )}
      {params?.additionalElementsParams?.position === 'end' &&
        params?.additionalElementsParams.additionalElements}
    </div>
  )
}

export { Navigation }
