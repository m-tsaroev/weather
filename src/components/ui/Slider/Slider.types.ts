import type { Dispatch, ReactNode, SetStateAction } from 'react'
import type { SwiperClass } from 'swiper/react'

interface BaseSliderParams {
  slidesPerView: number | 'auto'
  initialSlideIndex?: number
  hasSimulateTouch?: boolean
  hasAllowTouchMove?: boolean
  spaceBetween?: number
}

interface BasicSliderParams extends BaseSliderParams {
  mode: 'basic'
  hasPagination?: boolean
  hasNavigation?: boolean
}

interface CustomSliderParams extends BaseSliderParams {
  mode: 'custom'
  hasPagination: boolean
  hasNavigation: boolean
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
  children: ReactNode
  slidesCardsCount: number
  sliderParams: BasicSliderParams | CustomSliderParams
}

export type { SliderProps }
