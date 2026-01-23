import { AddCityButton } from '@/components/ui/AddCityButton'
import { Tab } from '@/components/ui/Tabs/components/Tab/Tab'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import classNames from 'classnames'
import { AnimatePresence } from 'motion/react'
import { type KeyboardEvent } from 'react'
import styles from './TabsNavigation.module.css'
import type { TabsNavigationProps } from './TabsNavigation.types'

const TabsNavigation = (props: TabsNavigationProps) => {
  const { items } = props

  const { activeCityName, activeCityIndex, cities } = useTypedSelector(
    (state) => state.cities,
  )
  const { changeActiveCity, removeCity, activateModal } = useActions()

  const navigationOnKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const { code } = event

    const onArrowRightKeyDown = () => {
      changeActiveCity(
        activeCityIndex === cities.length - 1 ? 0 : activeCityIndex + 1,
      )
    }

    const onArrowLeftKeyDown = () => {
      changeActiveCity(
        activeCityIndex === 0 ? cities.length - 1 : activeCityIndex - 1,
      )
    }

    const onDeleteKeyDown = () => {
      removeCity(activeCityName)
    }

    const actions = {
      ArrowLeft: onArrowLeftKeyDown,
      ArrowRight: onArrowRightKeyDown,
      Delete: onDeleteKeyDown,
    }[code]

    actions?.()
  }

  const onAddCityButtonClick = () => {
    activateModal('isShowAddWeatherFormModal')
  }

  return (
    <div
      className={classNames(styles.navigation)}
      role='tablist'
      onKeyDown={navigationOnKeyDown}
    >
      <AnimatePresence>
        {items.map((item) => (
          <Tab name={item} isActive={activeCityName === item} key={item} />
        ))}
        <AddCityButton
          className={styles.addButton}
          onClickFunction={onAddCityButtonClick}
          mode='for-tabs'
        />
      </AnimatePresence>
    </div>
  )
}

export { TabsNavigation }
