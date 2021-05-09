import { Reducer, useReducer } from 'react'
import {
  addHoursAndReformat,
  formatDate,
  formatTime,
  getRoundedTime,
  getRoundedTimeFromDate,
  isValidDatetime,
  isValidTime,
  subHoursAndReformat,
} from 'shared/timeUtils'

type OppOnHours = 'add' | 'sub'

const oppOnHours: { [key in OppOnHours]: typeof addHoursAndReformat } = {
  add: addHoursAndReformat,
  sub: subHoursAndReformat,
}

const TYPES = {
  DATE: 'DATE',
  TIME: 'TIME',
  DATE_TIME: 'DATE_TIME',
}

const timerReducer = (state, action) => {
  switch (action.type) {
    case TYPES.DATE:
      return { ...state, date: action.value }
    case TYPES.TIME:
      return { ...state, time: action.value }
    case TYPES.DATE_TIME: {
      const { date, time } = action.value
      return { ...state, date, time }
    }
    default:
      return state
  }
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

type TimerState = { date: string; time: string }
type TimerAction = { value: string }

type UseTimerHelpers = () => {
  state: TimerState
  nearest: () => void
  roundTime: () => void
  addHours: (hours: number) => void
  subHours: (hours: number) => void
}

type TimerReducer = Reducer<TimerState, TimerAction>

const useTimerHelpers: UseTimerHelpers = () => {
  const [state, dispatch] = useReducer<TimerReducer>(timerReducer, {
    date: formatDate(new Date()),
    time: getRoundedTimeFromDate(new Date()),
  })
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
  }
}

export default useTimerHelpers
