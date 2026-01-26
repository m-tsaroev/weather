import type { ReactNode } from 'react'
import type { BasicSliderPropsParams } from './components/BasicSlider/BasicSlider.types'
import type { CustomSliderPropsParams } from './components/CustomSlider'

interface BasicSliderParams extends BasicSliderPropsParams {
  mode: 'basic'
}

interface CustomSliderParams extends CustomSliderPropsParams {
  mode: 'custom'
}

interface SliderProps {
  className: string
  children: ReactNode[]
  sliderParams: BasicSliderParams | CustomSliderParams
}

export type { SliderProps }
