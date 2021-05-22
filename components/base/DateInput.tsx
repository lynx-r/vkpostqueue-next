import { renderTextError } from '@/components/base/TextError'
import UseFormHookProps from '@/shared/UseFormHookProps'
import { ErrorMessage } from '@hookform/error-message'
import { FC, InputHTMLAttributes } from 'react'

type InputProps = UseFormHookProps & InputHTMLAttributes<HTMLInputElement>

const DateInput: FC<InputProps> = ({
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
      <input {...register} id="input" type="date" {...rest} />
      <ErrorMessage
        errors={errors}
        name={register.name}
        render={renderTextError}
      />
    </div>
  )
}

export default DateInput
