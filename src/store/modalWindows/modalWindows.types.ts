interface SliceIninitialState {
  isShowAddWeatherFormModal: boolean
  isShowRenameWeatherFormModalIndex: number
  isShowWeatherDisplayTypeModal: boolean
}

type ActivateModalActionPayload =
  | 'isShowAddWeatherFormModal'
  | { isShowRenameWeatherFormModalIndex: number }
  | 'isShowWeatherDisplayTypeModal'

type DisactivateModalActionPayload =
  | 'isShowAddWeatherFormModal'
  | 'isShowRenameWeatherFormModalIndex'
  | 'isShowWeatherDisplayTypeModal'

export type {
  ActivateModalActionPayload,
  DisactivateModalActionPayload,
  SliceIninitialState,
}
