import { BaseElementProps } from '@/shared'
import { FC } from 'react'

const Footer: FC<BaseElementProps> = () => {
  return (
    <footer className="bg-primary-100 flex items-center justify-center h-12 mt-8 shadow">
      <div>VkPostQueue - {new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer
