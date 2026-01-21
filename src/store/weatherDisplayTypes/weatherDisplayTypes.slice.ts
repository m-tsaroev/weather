import type {
  ActivateDisplayTypeActionPayload,
  SliceInitialState,
} from '@/store/weatherDisplayTypes/weatherDisplayTypes.types'
import { LocalStorageService } from '@/utils/LocalStorageService'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: SliceInitialState = {
  isSelectDisplayType: true,
  isSliderDisplayType: false,
  isTabsDisplayType: false,
}

const storageState = new LocalStorageService<SliceInitialState>(
  'weatherDisplayType',
  initialState,
)

const weatherDisplayTypes = createSlice({
  name: 'weatherDisplayTypes',
  initialState: storageState.state,
  reducers: {
    activateDisplayType: (
      state,
      action: PayloadAction<ActivateDisplayTypeActionPayload>,
    ) => {
      state.isSelectDisplayType = false
      state.isSliderDisplayType = false
      state.isTabsDisplayType = false
      state[action.payload] = true

      storageState.setState(state)
    },
  },
})

export { weatherDisplayTypes }
export const weatherDisplayTypesReducer = weatherDisplayTypes.reducer
export const weatherDisplayTypesAction = weatherDisplayTypes.actions
