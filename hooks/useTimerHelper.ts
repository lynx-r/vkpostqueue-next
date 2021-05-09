import { timerReducer, TYPES } from '@/reducers'
import { DateTime, OppOnHours, TimerReducer, TimerState } from '@/shared'
import { useReducer } from 'react'
import {
  addHoursAndReformat,
  formatDate,
  getRoundedTime,
  getRoundedTimeFromDate,
  isValidDatetime,
  isValidTime,
  subHoursAndReformat,
} from 'shared/timeUtils'

const oppOnHours: { [key in OppOnHours]: typeof addHoursAndReformat } = {
  add: addHoursAndReformat,
  sub: subHoursAndReformat,
}

const nearestFactory = (dispatch) => (): void => {
  const date = formatDate(new Date())
  const time = getRoundedTimeFromDate(new Date())
  dispatch({ type: TYPES.DATE_TIME, value: { date, time } })
}

const roundTimeFactory = ({ date, time }, dispatch, nearest) => (): void => {
  if (!isValidDatetime(date, time)) {
    nearest()
    return
  }
  const roundedTime = getRoundedTime(time)
  dispatch({ type: TYPES.TIME, value: roundedTime })
}

const oppHoursFactory = ({ time }, dispatch, nearest, opp: OppOnHours) => (
  hours: number,
): void => {
  if (!isValidTime(time)) {
    nearest()
    return
  }
  const roundedTime = oppOnHours[opp](time, hours)
  dispatch({ type: TYPES.TIME, value: roundedTime })
}

const useTimerHelper = (): {
  state: TimerState
  nearest: () => void
  roundTime: () => void
  addHours: (hours: number) => void
  subHours: (hours: number) => void
  setDate: (date: string) => void
  setTime: (time: string) => void
  setDateTime: (dateTime: DateTime) => void
} => {
  const [state, dispatch] = useReducer<TimerReducer>(timerReducer, {
    date: formatDate(new Date()),
    time: getRoundedTimeFromDate(new Date()),
  })
  const setDate = (date) => {
    dispatch({ type: TYPES.DATE, value: date })
  }
  const setTime = (time) => {
    dispatch({ type: TYPES.TIME, value: time })
  }
  const setDateTime = (dateTime) => {
    dispatch({ type: TYPES.DATE_TIME, value: dateTime })
  }
  const nearest = nearestFactory(dispatch)
  const roundTime = roundTimeFactory(state, dispatch, nearest)
  const addHours = oppHoursFactory(state, dispatch, nearest, 'add')
  const subHours = oppHoursFactory(state, dispatch, nearest, 'sub')
  return {
    state,
    nearest,
    roundTime,
    addHours,
    subHours,
    setDate,
    setTime,
    setDateTime,
  }
}

export default useTimerHelper
