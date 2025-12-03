import { Slider } from '@/components/ui/Slider'
import { WeatherCard } from '@/components/ui/WeatherCard'
import classNames from 'classnames'
import styles from './Weather.module.css'

const Weather = () => {
  const titleId = 'weather'

  return (
    <section className='section' aria-labelledby={titleId}>
      <h1 className='visually-hidden' id={titleId}>
        Weather
      </h1>
      <div className={classNames( styles.body)}>
        <Slider
          sliderCards={[
            <WeatherCard city='Moscow' />,
            <WeatherCard city='Nazran' />,
            <WeatherCard city='Rostov on don' />,
          ]}
          initialSlideIndex={1}
        />
        {/* <WeatherCard city='Moscow' /> */}
      </div>
    </section>
  )
}

export { Weather }
