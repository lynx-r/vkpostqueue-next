import NavLink from '@/components/base/NavLink'
import { QUEUE_URL } from '@/config'
import { BaseElementProps } from '@/shared'
import { FC } from 'react'

const Header: FC<BaseElementProps> = ({ className }) => {
  return (
    <header
      className={`${className} h-16 flex items-center space-x-12 bg-blue-300 shadow-lg px-8 mb-8`}
    >
      <NavLink href="/">
        <a>Главная</a>
      </NavLink>
      <NavLink href={QUEUE_URL}>
        <a>Очередь</a>
      </NavLink>
    </header>
  )
}

export default Header
