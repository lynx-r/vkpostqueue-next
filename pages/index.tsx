import Button from '@/components/base/Button'
import { FC } from 'react'

const Home: FC = () => {
  const onRegisterSw = () => {
    // todo
  }
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <div>
        <Button onClick={onRegisterSw}>Включить уведомления</Button>
      </div>
    </div>
  )
}
export default Home
