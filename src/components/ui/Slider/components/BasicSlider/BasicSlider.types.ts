import type { ReactNode } from "react"

interface BasicSliderProps {
  hasPagination?: boolean
  hasNavigation?: boolean
  slidesPerView: number | 'auto'
  initialSlideIndex?: number
  hasSimulateTouch?: boolean
  hasAllowTouchMove?: boolean
  spaceBetween?: number
  className: string
  children: ReactNode[]
}

export type { BasicSliderProps }