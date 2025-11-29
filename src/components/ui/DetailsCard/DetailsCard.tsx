import styles from './DetailsCard.module.css'
import type { DetailsCardProps } from './DetailsCard.types'

const DetailsCard = (props: DetailsCardProps) => {
  const { name, value } = props

  return (
    <div className={styles.detailsCard}>
      <div className={styles.name}>{name}</div>
      <div className={styles.value}>{value}</div>
    </div>
  )
}

export { DetailsCard }
