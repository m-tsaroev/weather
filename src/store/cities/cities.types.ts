interface CitiesSliceState {
  cities: string[]
  activeCityName: string
  activeCityIndex: number
}

interface cityRenameActionPayload {
  cityName: string
  newCityName: string
}

export type { CitiesSliceState, cityRenameActionPayload }
