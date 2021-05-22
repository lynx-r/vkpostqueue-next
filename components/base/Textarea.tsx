import { renderTextError } from '@/components/base/TextError'
import UseFormHookProps from '@/shared/UseFormHookProps'
import { ErrorMessage } from '@hookform/error-message'
import { FC, TextareaHTMLAttributes } from 'react'

type TextareaProps = UseFormHookProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>

const Textarea: FC<TextareaProps> = ({
  children,
  register,
  errors,
  className = '',
  ...rest
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor="textarea">{children}</label>
      <textarea {...register} id="textarea" className="h-full" {...rest} />
      <ErrorMessage
        errors={errors}
        name={register.name}
        render={renderTextError}
      />
    </div>
  )
}

export default Textarea
