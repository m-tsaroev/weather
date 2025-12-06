import type { Dispatch, SetStateAction } from 'react'
import type { SwiperClass } from 'swiper/react'

interface SliderProps {
  sliderCards: string[]
  initialSlideIndex?: number
  onAddButtonFunction: () => void
  onNextCLick: () => void
  onPrevCLick: () => void
  swiperInstansSetter?: Dispatch<SetStateAction<SwiperClass | null>>
}

export type { SliderProps }
