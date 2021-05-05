import { ErrorMessage } from '@hookform/error-message'
import { FC } from 'react'
import { TextareaProps } from '@/shared'

const Textarea: FC<TextareaProps> = ({
  children,
  register,
  errors,
  className,
  ...rest
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor="textarea">{children}</label>
      <textarea {...register} id="textarea" className="h-full" {...rest} />
      <ErrorMessage
        errors={errors}
        name={register.name}
        render={({ message }) => <p className="error-text">{message}</p>}
      />
    </div>
  )
}

export default Textarea
