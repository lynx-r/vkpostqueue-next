import { BaseElementProps } from '@/shared'
import { FC } from 'react'

const Footer: FC<BaseElementProps> = () => {
  return (
    <footer className="flex items-center justify-center h-12 bg-blue-100 bg-opacity-50 mt-8 shadow">
      <div>VkPostQueue - {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer