import Button from '@/components/base/Button'
import MyWindiComponent from '@/components/MyWindiComponent'
import { FC } from 'react'

const Home: FC = () => {
  const onRegisterSw = () => {
    // todo
    alert('hi')
  }
  return (
    <div>
      <h1>Добро пожаловать!</h1>
      <MyWindiComponent />
      <div>
        <Button onClick={onRegisterSw}>Включить уведомления</Button>
      </div>
    </div>
  )
}
export default Home
