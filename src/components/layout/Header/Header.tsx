import { Select } from '@/components/ui/Select'
import { ICONS } from '@/config/icons'
import { PATHS } from '@/config/paths'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import classNames from 'classnames'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const { hasValidApiKey } = useTypedSelector((state) => state.apiKey)

  const { activateModal } = useActions()

  return (
    <header className={styles.header}>
      <div className={classNames(styles.inner, 'container')}>
        <ul className={styles.list}>
          {location.pathname === PATHS.WEATHER ? (
            <li className={classNames(styles.item, styles.setupItem)}>
              <Select
                name='header'
                hasSelection={false}
                value={ICONS.GEAR}
                options={[
                  {
                    name: 'Setup',
                    optionFunction: () => {
                      return navigate(PATHS.SETUP)
                    },
                  },
                  {
                    name: 'Weather display type',
                    optionFunction: () => {
                      activateModal('isShowWeatherDisplayTypeModal')
                    },
                  },
                ]}
                tabIndex={0}
                className={styles.select}
              />

              {/* <Link className={styles.setupLink} to={PATHS.SETUP}>
                {ICONS.GEAR}
              </Link> */}
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
