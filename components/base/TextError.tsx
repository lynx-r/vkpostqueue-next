import { FC } from 'react'

const TextError: FC = ({ children }) => {
  return (
    <div>
      <p className="error-text">{children}</p>
    </div>
  )
}

export default TextError
