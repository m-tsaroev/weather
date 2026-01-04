import type { Dispatch, SetStateAction } from 'react'
import type { SwiperClass } from 'swiper/react'

interface SliderParams {
  slidesPerView: number | 'auto'
  hasPagination: boolean
  hasNavigation: boolean
  sliderCards: string[]
  initialSlideIndex?: number
  activeSlideIndex: number
  changeActiveSlideFunction?: (slideIndex: number) => void
  onAddButtonFunction?: () => void
  onNextCLick?: () => void
  onPrevCLick?: () => void
  onPaginationBulletCLick?: (index: number) => void
  swiperInstansSetter?: Dispatch<SetStateAction<SwiperClass | null>>
}

interface SliderProps {
  className: string
  sliderParams: SliderParams
}

export type { SliderProps }
