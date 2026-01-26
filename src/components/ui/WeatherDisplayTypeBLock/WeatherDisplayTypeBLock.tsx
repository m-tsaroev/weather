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
    <OverlayModal id={-2} overlayName='WeatherDisplayTypes'>
      <Button
        label='Выборка'
        onClickFunction={onSelectChooseButtonClick}
        type='button'
        className={styles.button}
      />
      <Button
        label='Слайдер'
        onClickFunction={onSliderChooseButtonClick}
        type='button'
        className={styles.button}
      />
      <Button
        label='Вкладки'
        onClickFunction={onTabsChooseButtonClick}
        type='button'
        className={styles.button}
      />
    </OverlayModal>
  )
}

export { WeatherDisplayTypeBLock }
