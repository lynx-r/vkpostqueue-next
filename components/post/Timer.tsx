import Button from '@/components/base/Button'
import useTimerHelpers from 'hooks/useTimerHelpers'
import { FC } from 'react'

const Timer: FC = () => {
  const { state, nearest, roundTime, addHours, subHours } = useTimerHelpers()
  return (
    <div className="space-y-2">
      {state.date} {state.time}
      <div className="flex space-x-4">
        <Button colorType="secondary" onClick={nearest}>
          Ближайшее
        </Button>
        <Button colorType="secondary" onClick={roundTime}>
          Округлить
        </Button>
        <Button colorType="secondary" onClick={() => addHours(1)}>
          +1 ч.
        </Button>
        <Button colorType="secondary" onClick={() => subHours(1)}>
          -1 ч.
        </Button>
      </div>
    </div>
  )
}

export default Timer
