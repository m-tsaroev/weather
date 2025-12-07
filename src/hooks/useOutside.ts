import {
  useEffect,
  useRef,
  useState,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from 'react'

interface TypeOut<T extends HTMLElement> {
  ref: RefObject<T | null>
  isShow: boolean
  setIsShow: Dispatch<SetStateAction<boolean>>
}

const useOutside = <RefElementType extends HTMLElement>(
  initialIsVisible: boolean,
): TypeOut<RefElementType> => {
  const [isShow, setIsShow] = useState<boolean>(initialIsVisible)
  const ref = useRef<RefElementType | null>(null)

  const handleClickOutside = (event: Event) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as HTMLElement)
    ) {
      setIsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true)

    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  })

  return { ref, isShow, setIsShow }
}

export { useOutside }
