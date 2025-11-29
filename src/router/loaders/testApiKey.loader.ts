import { PATHS } from '@/config/paths'
import { store } from '@/store'
import { weatherApiSlice } from '@/store/api/weatherApi.slice'
import { redirect } from 'react-router-dom'

const testApiKeyLoader = async (): Promise<null | Response> => {
  const promise = store.dispatch(
    weatherApiSlice.endpoints.validateApiKey.initiate({}),
  )

  const { data } = await promise

  return data?.valid ? null : redirect(`${PATHS.SETUP}`)
}

export { testApiKeyLoader }
