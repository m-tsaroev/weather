import type { ReactNode } from 'react'

interface BasicSliderPropsParams {
  hasPagination?: boolean
  hasNavigation?: boolean
  slidesPerView: number | 'auto'
  initialSlideIndex?: number
  hasSimulateTouch?: boolean
  hasAllowTouchMove?: boolean
  spaceBetween?: number
}

interface BasicSliderProps extends BasicSliderPropsParams {
  className: string
  children: ReactNode[]
}

export type { BasicSliderProps, BasicSliderPropsParams }
