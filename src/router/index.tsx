import { PATHS } from "@/config/paths";
import { WeatherLayout } from "@/layouts/WeatherLayout";
import { Weather } from "@/pages/Weather";
import { createBrowserRouter, redirect } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect(PATHS.WEATHER)
  },
  {
    path: PATHS.WEATHER,
    element: <WeatherLayout />,
    children: [
      {
        index: true,
        element: <Weather />
      }
    ]
  }
])

export { router }