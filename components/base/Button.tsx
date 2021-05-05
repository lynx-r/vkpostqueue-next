import { ButtonHTMLAttributes, FC } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  colorType?: string
}

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
