import Button from '@/components/base/Button'
import { TimerContext } from '@/shared'
import { FC, useContext } from 'react'

const TimerControls: FC = () => {
  const { nearest, roundTime, addHours, subHours } = useContext(TimerContext)

  const onClickAddHour = () => addHours(1)
  const onClickSubHour = () => subHours(1)
  return (
    <div className="flex space-x-4">
      <Button colorType="secondary" onClick={nearest}>
        Ближайшее
      </Button>
      <Button colorType="secondary" onClick={roundTime}>
        Округлить
      </Button>
      <Button colorType="secondary" onClick={onClickAddHour}>
        +1 ч.
      </Button>
      <Button colorType="secondary" onClick={onClickSubHour}>
        -1 ч.
      </Button>
    </div>
  )
}

export default TimerControls
