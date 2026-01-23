import { GlassDiv } from '@/components/decor/GlassDiv'
import { useActions } from '@/hooks/useActions'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import classNames from 'classnames'
import styles from './Tab.module.css'
import type { TabProps } from './Tab.types'

const Tab = (props: TabProps) => {
  const { name, isActive } = props

  const { cities } = useTypedSelector((state) => state.cities)
  const { changeActiveCity } = useActions()

  const onTabClick = () => {
    const tabNameIndex = cities.findIndex((value) => value === name)

    changeActiveCity(tabNameIndex)
  }

  return (
    <GlassDiv
      motionParams={{
        initial: {
          y: -8,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: isActive ? 1 : 0.5
        },
        exit: {
          y: 8,
          opacity: 0
        },
        whileHover: {
          opacity: 1
        },
        transition: {
          duration: 0.2,
        },
      }}
      hasCircles
      className={classNames(styles.tab, {
        [styles.isActive]: isActive,
      })}
      onClick={onTabClick}
      role='tab'
      tabIndex={isActive ? 0 : -1}
    >
      {name}
    </GlassDiv>
  )
}

export { Tab }
