import type {
  ActivateModalActionPayload,
  DisactivateModalActionPayload,
  SliceIninitialState,
} from '@/store/modalWindows/modalWindows.types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: SliceIninitialState = {
  isShowAddWeatherFormModal: false,
  isShowRenameWeatherFormModalIndex: -1,
  isShowWeatherDisplayTypeModal: false,
}

const modalWindowsSlice = createSlice({
  name: 'modalWindows',
  initialState,
  reducers: {
    activateModal: (
      state,
      action: PayloadAction<ActivateModalActionPayload>,
    ) => {
      if (typeof action.payload === 'string') {
        state[action.payload] = true
        return
      }

      state.isShowRenameWeatherFormModalIndex =
        action.payload.isShowRenameWeatherFormModalIndex
    },

    disactivateModal: (
      state,
      action: PayloadAction<DisactivateModalActionPayload>,
    ) => {
      if (action.payload !== 'isShowRenameWeatherFormModalIndex') {
        state[action.payload] = false
        return
      }

      state.isShowRenameWeatherFormModalIndex = -1
    },
  },
})

export { modalWindowsSlice }
export const modalWindowsReducer = modalWindowsSlice.reducer
export const modalWindowsActions = modalWindowsSlice.actions
