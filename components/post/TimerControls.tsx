import Button from '@/components/base/Button'
import { TimerReducerHook } from '@/shared'
import { FC } from 'react'

type TimerControlsProps = { timerReducer: TimerReducerHook }

const TimerControls: FC<TimerControlsProps> = ({ timerReducer }) => {
  const { nearest, roundTime, addHours, subHours } = timerReducer

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
