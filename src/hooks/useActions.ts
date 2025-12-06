import { apiKeyActions } from '@/store/apiKey/apiKey.slice'
import { citiesActions } from '@/store/cities/cities.slice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

const allActions = {
  ...apiKeyActions,
  ...citiesActions,
}

const useActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(allActions, dispatch)
}

export { useActions }
