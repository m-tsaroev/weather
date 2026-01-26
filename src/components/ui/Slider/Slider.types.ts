import type { ReactNode } from 'react'
import type { BasicSliderProps } from './components/BasicSlider'
import type { CustomSliderPropsParams } from './components/CustomSlider'

interface BasicSliderParams extends BasicSliderProps {
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
