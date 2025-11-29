import { ForcastNow } from '@/components/ui/ForcastNow'
import styles from './Weather.module.css'
import { useGetForecastQuery } from '@/store/api/weatherApi.slice'

const Weather = () => {
  const titleId = 'weather'

  const {data, isLoading} = useGetForecastQuery({city: 'Nazran'})

  return (
    <section className='section' aria-labelledby={titleId}>
      <h1 className='visually-hidden' id={titleId}>
        Weather
      </h1>
      <div className={styles.body}>
        <ForcastNow data={data} isLoading={isLoading} />
      </div>
    </section>
  )
}

export { Weather }
