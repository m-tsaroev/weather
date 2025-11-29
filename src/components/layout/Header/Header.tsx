import { ICONS } from '@/config/icons'
import { PATHS } from '@/config/paths'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import classNames from 'classnames'
import { Link, useLocation } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const location = useLocation()

  const { hasValidApiKey } = useTypedSelector((state) => state.apiKey)

  return (
    <header className={styles.header}>
      <div className={classNames(styles.inner, 'container')}>
        <ul className={styles.list}>
          {location.pathname === PATHS.WEATHER ? (
            <li className={classNames(styles.item, styles.setupItem)}>
              <Link className={styles.setupLink} to={PATHS.SETUP}>
                {ICONS.GEAR}
              </Link>
            </li>
          ) : (
            location.pathname !== PATHS.WEATHER && (
              <li className={styles.weatherItem}>
                <Link
                  className={classNames(
                    styles.weatherLink,
                    hasValidApiKey && styles.active,
                  )}
                  to={PATHS.WEATHER}
                >
                  {ICONS.CLOUD}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  )
}

export { Header }
