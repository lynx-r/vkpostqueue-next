import {
  DATE_IN_PAST_ERROR,
  FIELD_REQUIRED_ERROR,
  TIME_IN_PAST_ERROR,
} from '@/config'
import { DateTime, parseDateAndTime } from '@/shared'
import { isFuture } from 'date-fns'
import { useMemo } from 'react'
import { RegisterOptions } from 'react-hook-form'

const useTimerValidator = (
  state: DateTime,
): {
  dateInputValidator: RegisterOptions
  timeInputValidator: RegisterOptions
} => {
  const dateInputValidator = useMemo(
    () => ({
      required: FIELD_REQUIRED_ERROR,
      validate: (value) => {
        if (state.time) {
          const date = parseDateAndTime(value, state.time)
          return isFuture(date) || DATE_IN_PAST_ERROR
        }
        return true
      },
    }),
    [state],
  )

  const timeInputValidator = useMemo(
    () => ({
      required: FIELD_REQUIRED_ERROR,
      validate: (value) => {
        if (state.date) {
          const date = parseDateAndTime(state.date, value)
          return isFuture(date) || TIME_IN_PAST_ERROR
        }
        return true
      },
    }),
    [state],
  )

  return { dateInputValidator, timeInputValidator }
}

export default useTimerValidator
