import DateInput from '@/components/base/DateInput'
import TimeInput from '@/components/base/TimeInput'
import TimerControls from '@/components/post/TimerControls'
import useTimerValidator from '@/hooks/useTimerValidator'
import { DateTime, TimerContext } from '@/shared'
import { FC, useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'

type TimerForm = { timer: DateTime }

const Timer: FC = () => {
  const { state, setDate, setTime } = useContext(TimerContext)

  const {
    register,
    setValue,
    formState: { errors },
  } = useForm<TimerForm>()

  const { dateInputValidator, timeInputValidator } = useTimerValidator(state)

  useEffect(() => {
    setValue('timer', { ...state }, { shouldValidate: true, shouldDirty: true })
  }, [state, setValue])

  const onChangeDate = (e) => setDate(e.target.value)
  const onChangeTime = (e) => setTime(e.target.value)
  return (
    <div className="space-y-2">
      <TimerControls />
      <div className="flex space-x-4">
        <DateInput
          register={register('timer.date', dateInputValidator)}
          errors={errors}
          onChange={onChangeDate}
        >
          Дата поста
        </DateInput>
        <TimeInput
          register={register('timer.time', timeInputValidator)}
          errors={errors}
          onChange={onChangeTime}
        >
          Время поста
        </TimeInput>
      </div>
    </div>
  )
}

export default Timer
