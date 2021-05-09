import Button from '@/components/base/Button'
import DateInput from '@/components/base/DateInput'
import TimeInput from '@/components/base/TimeInput'
import useTimerHelpers from '@/hooks/useTimerHelper'
import { FC, useEffect } from 'react'
import { useForm } from 'react-hook-form'

const Timer: FC = () => {
  const {
    state,
    nearest,
    roundTime,
    addHours,
    subHours,
    setDateTime,
  } = useTimerHelpers()

  const {
    register,
    setValue,
    getValues,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    setValue('date', state.date)
    setValue('time', state.time)
  }, [state, setValue])

  const updateDateTime = () => {
    const [date, time] = getValues(['date', 'time'])
    setDateTime({ date, time })
  }

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
          register={register('date')}
          errors={errors}
          onBlur={updateDateTime}
        >
          Дата поста
        </DateInput>
        <TimeInput
          register={register('time')}
          errors={errors}
          onBlur={updateDateTime}
        >
          Время поста
        </TimeInput>
      </div>
    </div>
  )
}

export default Timer
