import type { ReactNode } from "react"

interface SliderProps {
  sliderCards: ReactNode[]
  initialSlideIndex?: number
  onAddButtonFunction: () => void
}

export type { SliderProps }