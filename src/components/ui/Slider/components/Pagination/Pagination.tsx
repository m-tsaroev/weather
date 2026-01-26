import classNames from 'classnames'
import { useSwiper } from 'swiper/react'
import styles from './Pagination.module.css'

const Pagination = () => {
  const swiper = useSwiper()

  const activeIndex = swiper.activeIndex

  return (
    <div className={styles.pagination}>
      {swiper.slides.map((_, index) => (
        <button
          key={index}
          className={classNames(styles.pagiantionBullet, {
            [styles.isActive]: index === activeIndex,
          })}
          onClick={() => {
            swiper.slideTo(index)
          }}
          aria-label={`Перейти к слайду ${index + 1}`}
        />
      ))}
    </div>
  )
}

export { Pagination }
