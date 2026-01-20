import { apiKeyActions } from '@/store/apiKey/apiKey.slice'
import { citiesActions } from '@/store/cities/cities.slice'
import { modalWindowsActions } from '@/store/modalWindows/modalWindows.slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const allActions = {
  ...apiKeyActions,
  ...citiesActions,
  ...modalWindowsActions
}

const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}

export { useActions }
