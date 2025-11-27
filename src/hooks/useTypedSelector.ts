import type { TypeRootState } from '@/store'
import { useSelector, type TypedUseSelectorHook } from 'react-redux'

const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector

export { useTypedSelector }
