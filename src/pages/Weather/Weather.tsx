import { Slider } from '@/components/ui/Slider'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import classNames from 'classnames'
import styles from './Weather.module.css'
import { Field } from '@/components/ui/Field'

const Weather = () => {
  const titleId = 'weather'
  

  const { cities, activeCityIndex } = useTypedSelector((state) => state.cities)
  const { changeActiveCity, addCity } = useActions()

  const onAddFuction = () => {
    const citi = prompt('Введите название города')

    addCity(citi || 'New York')
  }

  const onPrevButtonClick = () => {
    changeActiveCity(activeCityIndex - 1)
  }

  const onNextButtonClick = () => {
    changeActiveCity(activeCityIndex + 1)
  }

  return (
    <section className='section' aria-labelledby={titleId}>
      <h1 className='visually-hidden' id={titleId}>
        Weather
      </h1>
      <div className={classNames(styles.body)}>
        <Slider
          sliderCards={cities}
          initialSlideIndex={activeCityIndex}
          onAddButtonFunction={onAddFuction}
          onNextCLick={onNextButtonClick}
          onPrevCLick={onPrevButtonClick}
        />
      </div>
    </section>
  )
}

export { Weather }
