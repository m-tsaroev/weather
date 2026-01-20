import type {
  ActivateModalActionPayload,
  SliceIninitialState,
} from '@/store/modalWindows/modalWindows.types'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: SliceIninitialState = {
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
      state[action.payload] = true
    },

    disactivateModal: (
      state,
      action: PayloadAction<ActivateModalActionPayload>,
    ) => {
      state[action.payload] = false
    },

  },
})

export {modalWindowsSlice}
export const modalWindowsReducer = modalWindowsSlice.reducer
export const modalWindowsActions = modalWindowsSlice.actions