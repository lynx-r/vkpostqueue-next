import Button from '@/components/base/Button'
import DateInput from '@/components/base/DateInput'
import TimeInput from '@/components/base/TimeInput'
import useTimerHelper from '@/hooks/useTimerHelper'
import useTimerValidator from '@/hooks/useTimerValidator'
import { DateTime } from '@/shared'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

type TimerForm = { timer: DateTime }

const Timer: FC = () => {
  const {
    state,
    nearest,
    roundTime,
    addHours,
    subHours,
    setDate,
    setTime,
  } = useTimerHelper()

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<TimerForm>()

  const { dateInputValidator, timeInputValidator } = useTimerValidator(state)

  useEffect(() => {
    setValue('timer', { ...state }, { shouldValidate: true, shouldDirty: true })
  }, [state, setValue])

  return (
    <div className="space-y-2">
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
      <div className="flex space-x-4">
        <DateInput
          register={register('timer.date', dateInputValidator)}
          errors={errors}
          onChange={(e) => setDate(e.target.value)}
        >
          Дата поста
        </DateInput>
        <TimeInput
          register={register('timer.time', timeInputValidator)}
          errors={errors}
          onChange={(e) => setTime(e.target.value)}
        >
          Время поста
        </TimeInput>
      </div>
    </div>
  )
}

export default Timer
