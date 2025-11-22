interface ButtonProps {
  lable: string
  className: string
  onClickFunction?: () => void
  type: 'button' | 'submit'
}

export type { ButtonProps }
