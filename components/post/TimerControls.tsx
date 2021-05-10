import Button from '@/components/base/Button'
import { TimerHelper } from '@/shared'
import { FC } from 'react'

type TimerControlsProps = { timerHelper: TimerHelper }

const TimerControls: FC<TimerControlsProps> = ({ timerHelper }) => {
  const { nearest, roundTime, addHours, subHours } = timerHelper

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
