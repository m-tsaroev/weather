import { Button } from '@/components/ui/Button'
import { OverlayModal } from '@/components/ui/OverlayModal'
import { useActions } from '@/hooks/useActions'
import styles from './WeatherDisplayTypeBLock.module.css'

const WeatherDisplayTypeBLock = () => {
  const { disactivateModal, activateDisplayType } = useActions()

  const onSliderChooseButtonClick = () => {
    activateDisplayType('isSliderDisplayType')
    disactivateModal('isShowWeatherDisplayTypeModal')
  }

  const onSelectChooseButtonClick = () => {
    activateDisplayType('isSelectDisplayType')
    disactivateModal('isShowWeatherDisplayTypeModal')
  }

  const onTabsChooseButtonClick = () => {
    activateDisplayType('isTabsDisplayType')
    disactivateModal('isShowWeatherDisplayTypeModal')
  }

  return (
    <OverlayModal overlayName='WeatherDisplayTypes'>
      <Button
        label='Select'
        onClickFunction={onSelectChooseButtonClick}
        type='button'
        className={styles.button}
      />
      <Button
        label='Slider'
        onClickFunction={onSliderChooseButtonClick}
        type='button'
        className={styles.button}
      />
      <Button
        label='Tabs'
        onClickFunction={onTabsChooseButtonClick}
        type='button'
        className={styles.button}
      />
    </OverlayModal>
  )
}

export { WeatherDisplayTypeBLock }
