interface SliceInitialState {
  isSelectDisplayType: boolean
  isSliderDisplayType: boolean
  isTabsDisplayType: boolean
}

type ActivateDisplayTypeActionPayload =
  | 'isSelectDisplayType'
  | 'isSliderDisplayType'
  | 'isTabsDisplayType'

export type { ActivateDisplayTypeActionPayload, SliceInitialState }
