import { useOutside } from '@/hooks/useOutside'
import classNames from 'classnames'
import { useEffect, useState, type KeyboardEvent } from 'react'
import styles from './Select.module.css'
import type { SelectProps } from './Select.types'

const Select = (props: SelectProps) => {
  const {
    name,
    // hasSelection = false,
    value,
    closeValue,
    options,
    tabIndex,
    className,
  } = props

  const [selectOptionIndex, setSelectOptionIndex] = useState<number>(-1)

  const {
    ref: dropdownRef,
    isShow: isDropDownShow,
    setIsShow: setIsDropDownShow,
  } = useOutside<HTMLDivElement>(false)

  const IDs = {
    label: `select-${name}-label`,
    dropdown: `select-${name}-dropdown`,
  }

  const onSelectButtonClick = () => {
    setIsDropDownShow((isOpen) => !isOpen)
  }

  const onSelectButtonKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const { code, target } = event

    const isNeedToExpanded = (): boolean => {
      const isSelectButtonElement = document.activeElement === target

      return !isDropDownShow && isSelectButtonElement
    }

    const onEnterKeyDown = () => {
      setIsDropDownShow(true)
    }

    const onEscapeKeyDown = () => {
      setIsDropDownShow(false)
    }

    const onSpaceKeyDown = () => {
      setIsDropDownShow(true)
    }

    const onArrowDownKeyDown = () => {
      if (isNeedToExpanded()) {
        setIsDropDownShow(true)

        return
      }

      setSelectOptionIndex(
        (prev) =>
          (prev +=
            selectOptionIndex < options.length - 1 ? 1 : -(options.length - 1)),
      )
    }

    const onArrowUpKeyDown = () => {
      setSelectOptionIndex(
        (prev) => (prev -= selectOptionIndex > 0 ? 1 : -(options.length - 1)),
      )
    }

    const action = {
      ArrowDown: onArrowDownKeyDown,
      ArrowUp: onArrowUpKeyDown,
      Space: onSpaceKeyDown,
      Enter: onEnterKeyDown,
      Escape: onEscapeKeyDown,
    }[code]

    if (action) action()
  }

  useEffect(() => {
    const currentOptionElements =
      dropdownRef.current?.querySelectorAll('button')

    currentOptionElements?.[selectOptionIndex]?.focus()
  }, [selectOptionIndex, dropdownRef])

  return (
    <div
      className={classNames(styles.select, className)}
      onKeyDown={onSelectButtonKeyDown}
      ref={dropdownRef}
    >
      <label id={IDs.label} className='visually-hidden'>
        Select {name}
      </label>
      <div
        className={classNames(
          styles.selectButton,
          isDropDownShow && styles.isOpen,
        )}
        role='combobox'
        aria-expanded={isDropDownShow}
        aria-haspopup='listbox'
        aria-controls={IDs.dropdown}
        aria-labelledby={IDs.label}
        tabIndex={tabIndex}
        onClick={onSelectButtonClick}
      >
        {!isDropDownShow ? value : closeValue}
      </div>
      <div
        ref={dropdownRef}
        className={classNames(
          styles.dropdown,
          isDropDownShow && styles.isDropdownOpen,
        )}
        id={IDs.dropdown}
        role='listbox'
        aria-labelledby={IDs.label}
      >
        {options.map((option, index) => (
          <button
            className={classNames(styles.option, {
              [styles.red]: option.mode === 'red',
            })}
            id={`${name}-option-${index}`}
            role='option'
            aria-selected={option?.isSelected}
            onClick={option.optionFunction}
            key={index}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export { Select }
