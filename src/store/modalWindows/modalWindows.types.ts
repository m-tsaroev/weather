interface SliceIninitialState {
  isShowAddWeatherFormModal: boolean
  isShowRenameWeatherFormModal: boolean
  isShowWeatherDisplayTypeModal: boolean
}

type ActivateModalActionPayload =
  | 'isShowAddWeatherFormModal'
  | 'isShowRenameWeatherFormModal'
  | 'isShowWeatherDisplayTypeModal'

type DisactivateModalActionPayload =
  | 'isShowAddWeatherFormModal'
  | 'isShowRenameWeatherFormModal'
  | 'isShowWeatherDisplayTypeModal'

export type {
  ActivateModalActionPayload,
  DisactivateModalActionPayload,
  SliceIninitialState,
}
