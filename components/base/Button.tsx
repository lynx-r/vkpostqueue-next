import ThemeProps from '@/shared/ThemeProps'
import { ButtonHTMLAttributes, FC } from 'react'

type ButtonProps = ThemeProps & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  colorType = 'primary',
  type = 'button',
  ...rest
}) => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button className={`button-${colorType}`} type={type} {...rest}>
      {children}
    </button>
  )
}

export default Button
