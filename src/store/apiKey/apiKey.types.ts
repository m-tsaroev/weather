interface ApiKeySliceState {
  hasValidApiKey: boolean
  apiKey: string | null
}

interface SetApiKeyPayload {
  valid: boolean
  apiKey?: string
}

export type { ApiKeySliceState, SetApiKeyPayload }
