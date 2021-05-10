import {
  OppOnHours,
  TimerAction,
  TimerHelper,
  TimerState,
  TYPES,
  addHoursAndReformat,
  formatDate,
  getRoundedTime,
  getRoundedTimeFromDate,
  isValidDatetime,
  isValidTime,
  subHoursAndReformat,
} from '@/shared'
import { Dispatch } from 'react'

const oppOnHours: { [key in OppOnHours]: typeof addHoursAndReformat } = {
  add: addHoursAndReformat,
  sub: subHoursAndReformat,
}

const nearestCreator = (dispatch) => (): void => {
  const date = formatDate(new Date())
  const time = getRoundedTimeFromDate(new Date())
  dispatch({ type: TYPES.DATE_TIME, value: { date, time } })
}

const roundTimeCreator = (
  dispatch: Dispatch<TimerAction>,
  { date, time },
  nearest,
) => (): void => {
  if (!isValidDatetime(date, time)) {
    nearest()
    return
  }
  const roundedTime = getRoundedTime(time)
  dispatch({ type: TYPES.TIME, value: roundedTime })
}

const oppHoursCreator = (dispatch, { time }, nearest, opp: OppOnHours) => (
  hours: number,
): void => {
  if (!isValidTime(time)) {
    nearest()
    return
  }
  const roundedTime = oppOnHours[opp](time, hours)
  dispatch({ type: TYPES.TIME, value: roundedTime })
}

const timerActions = (
  dispatch: Dispatch<TimerAction>,
  state: TimerState,
): TimerHelper => {
  const setDate = (date) => {
    dispatch({ type: TYPES.DATE, value: date })
  }
  const setTime = (time) => {
    dispatch({ type: TYPES.TIME, value: time })
  }
  const setDateTime = (dateTime) => {
    dispatch({ type: TYPES.DATE_TIME, value: dateTime })
  }
  const nearest = nearestCreator(dispatch)
  const roundTime = roundTimeCreator(dispatch, state, nearest)
  const addHours = oppHoursCreator(dispatch, state, nearest, 'add')
  const subHours = oppHoursCreator(dispatch, state, nearest, 'sub')
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

export default timerActions
