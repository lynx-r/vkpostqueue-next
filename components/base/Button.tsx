import { ButtonHTMLAttributes, FC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  twColor?: string
}

const Button: FC<ButtonProps> = ({
  children,
  twColor = '',
  type = 'button',
  ...rest
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`${twColor} rounded p-2 shadow`} type={type} {...rest}>
      {children}
    </button>
  )
}

export default Button
