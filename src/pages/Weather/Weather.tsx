import { ForcastNow } from '@/components/ui/ForcastNow'
import styles from './Weather.module.css'

const Weather = () => {
  const titleId = 'weather'

  return (
    <section className='section' aria-labelledby={titleId}>
      <h1 className='visually-hidden' id={titleId}>Weather</h1>
      <div className={styles.body}>
        <ForcastNow city='Malgobek' />
      </div>
    </section>
  )
}

export { Weather }
