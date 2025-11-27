import { STORAGE_KEYS } from '@/config/storageKeys'
import type {
  ApiKeySliceState,
  SetApiKeyPayload,
} from '@/store/apiKey/apiKey.types'
import { getInitialKey } from '@/utils/getInitialKey'
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

const initialState: ApiKeySliceState = {
  hasValidApiKey: !!getInitialKey(),
  apiKey: getInitialKey(),
}

const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState: initialState,
  reducers: {
    setApiKey: (state, action: PayloadAction<SetApiKeyPayload>) => {
      state.hasValidApiKey = action.payload.valid
      if (action.payload.apiKey) {
        state.apiKey = action.payload.apiKey || null
        localStorage.setItem(STORAGE_KEYS.API_KEY, action.payload.apiKey)
      }
    },
    deleteApiKey: (state) => {
      state.hasValidApiKey = false
      state.apiKey = null
      localStorage.removeItem(STORAGE_KEYS.API_KEY)
    },
  },
})

export { apiKeySlice }
export const apiKeyReducer = apiKeySlice.reducer
export const apiKeyActions = apiKeySlice.actions
