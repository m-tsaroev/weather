import { TabsNavigation } from '@/components/ui/Tabs/components/TabsNavigation'
import { WeatherCard } from '@/components/ui/WeatherCard'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import classNames from 'classnames'
import styles from './Tabs.module.css'
import type { TabsProps } from './Tabs.types'

const Tabs = (props: TabsProps) => {
  const { items, className } = props

  const { activeCityName } = useTypedSelector((state) => state.cities)

  return (
    <div className={classNames(styles.tabs, className)}>
      <TabsNavigation items={items} />
      <div className={styles.panel} role='tabpanel'>
        {items.map(
          (item) =>
            item === activeCityName && (
              <WeatherCard
                city={item}
                isActive={activeCityName === item}
                key={item}
              />
            ),
        )}
      </div>
    </div>
  )
}

export { Tabs }
