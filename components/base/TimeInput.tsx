import TextError from '@/components/base/TextError'
import UseFormHookProps from '@/shared/UseFormHookProps'
import { ErrorMessage } from '@hookform/error-message'
import { FC, InputHTMLAttributes } from 'react'

type InputProps = UseFormHookProps & InputHTMLAttributes<HTMLInputElement>

const TimeInput: FC<InputProps> = ({
  children,
  register,
  errors,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor="input" className="">
        {children}
      </label>
      <input {...register} id="input" type="time" {...rest} />
      <ErrorMessage
        errors={errors}
        name={register.name}
        render={({ message }) => <TextError>{message}</TextError>}
      />
    </div>
  )
}

export default TimeInput
