import { CustomSlider } from '@/components/ui/Slider/components/CustomSlider'
import 'swiper/css'
import 'swiper/css/bundle'
import { BasicSlider } from './components/BasicSlider'
import type { SliderProps } from './Slider.types'

const Slider = (props: SliderProps) => {
  const { className, children, sliderParams } = props

  const { mode } = sliderParams

  if (mode === 'custom') {
    return (
      <CustomSlider {...sliderParams} className={className}>
        {children}
      </CustomSlider>
    )
  }

  if (mode === 'basic') {
    return (
      <BasicSlider {...sliderParams} className={className}>
        {children}
      </BasicSlider>
    )
  }
}

export { Slider }
