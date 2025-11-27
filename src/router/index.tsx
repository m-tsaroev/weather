import { Spinner } from '@/components/ui/Spinner'
import { PATHS } from '@/config/paths'
import { SetupLayout } from '@/layouts/SetupLayout'
import { WeatherLayout } from '@/layouts/WeatherLayout'
import { Setup } from '@/pages/Setup'
import { Weather } from '@/pages/Weather'
import { testApiKeyLoader } from '@/router/loaders/testApiKey.loader'
import { createBrowserRouter, redirect } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: PATHS.MAIN,
    loader: () => redirect(PATHS.WEATHER),
  },
  {
    path: PATHS.WEATHER,
    element: <WeatherLayout />,
    hydrateFallbackElement: <Spinner />,
    children: [
      {
        index: true,
        element: <Weather />,
        loader: testApiKeyLoader,
      },
    ],
  },
  {
    path: PATHS.MAIN,
    element: <SetupLayout />,
    children: [
      {
        path: PATHS.SETUP,
        element: <Setup />,
      },
    ],
  },
])

export { router }
