import type { Dispatch, ReactNode, SetStateAction } from 'react'
import type { SwiperClass } from 'swiper/react'
import type { NavigationParams } from '../Navigation'

interface CustomSliderPropsParams {
  slidesPerView: number | 'auto'
  initialSlideIndex?: number
  hasSimulateTouch?: boolean
  hasAllowTouchMove?: boolean
  spaceBetween?: number
  hasPagination: boolean
  hasNavigation: boolean
  changeActiveSlideFunction?: (slideIndex: number) => void
  instansSetter?: Dispatch<SetStateAction<SwiperClass | null>>
  onNextCLick?: () => void
  onPrevCLick?: () => void
  navigationParams?: NavigationParams
}

interface CustomSliderProps extends CustomSliderPropsParams {
  className: string
  children: ReactNode[]
}

export type { CustomSliderProps, CustomSliderPropsParams }
