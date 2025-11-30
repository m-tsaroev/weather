import styles from './Weather.module.css'
import { WeatherCard } from '@/components/ui/WeatherCard'

const Weather = () => {
  const titleId = 'weather'

  return (
    <section className='section' aria-labelledby={titleId}>
      <h1 className='visually-hidden' id={titleId}>
        Weather
      </h1>
      <div className={styles.body}>
        <WeatherCard city='Moscow' />
      </div>
    </section>
  )
}

export { Weather }
