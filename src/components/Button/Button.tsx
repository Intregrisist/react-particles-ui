import type { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react'

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

const Button: FC<ButtonProps> = (props) => {
  return <button {...props} />
}

export default Button
