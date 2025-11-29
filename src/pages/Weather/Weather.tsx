import { ForecastDay } from '@/components/ui/ForcastDay'
import { ForcastNow } from '@/components/ui/ForcastNow'
import { useGetForecastQuery } from '@/store/api/weatherApi.slice'
import styles from './Weather.module.css'

const Weather = () => {
  const titleId = 'weather'

  const { data, isLoading } = useGetForecastQuery({ city: 'New York' })

  return (
    <section className='section' aria-labelledby={titleId}>
      <h1 className='visually-hidden' id={titleId}>
        Weather
      </h1>
      <div className={styles.body}>
        <ForcastNow data={data} isLoading={isLoading} />
        <ForecastDay data={data} isLoading={isLoading} />
      </div>
    </section>
  )
}

export { Weather }
