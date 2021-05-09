import { timerReducer, TYPES } from '@/reducers'
import { OppOnHours, TimerReducer, UseTimerHelper } from '@/shared'
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

const nearestFactory = ({ date, time }, dispatch) => (): void => {
  const fmtTime = getRoundedTime(time)
  dispatch({ type: TYPES.DATE_TIME, value: { date, time: fmtTime } })
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

const useTimerHelpers: UseTimerHelper = () => {
  const [state, dispatch] = useReducer<TimerReducer>(timerReducer, {
    date: formatDate(new Date()),
    time: getRoundedTimeFromDate(new Date()),
  })
  const setDateTime = (dateTime) => {
    dispatch({ type: TYPES.DATE_TIME, value: dateTime })
  }
  const nearest = nearestFactory(state, dispatch)
  const roundTime = roundTimeFactory(state, dispatch, nearest)
  const addHours = oppHoursFactory(state, dispatch, nearest, 'add')
  const subHours = oppHoursFactory(state, dispatch, nearest, 'sub')
  return {
    state,
    nearest,
    roundTime,
    addHours,
    subHours,
    setDateTime,
  }
}

export default useTimerHelpers
