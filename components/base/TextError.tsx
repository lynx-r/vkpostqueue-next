import { FC } from 'react'

const TextError: FC = ({ children }) => {
  return (
    <div>
      <p className="error-text">{children}</p>
    </div>
  )
}

const renderTextError: FC<{ message: string }> = ({ message }) => (
  <TextError>{message}</TextError>
)

export { TextError, renderTextError }
