import { DateTime, TimerAction, TimerState, TYPES } from '@/shared'
import timerActions from './actions'

const timerReducer = (state: TimerState, action: TimerAction): TimerState => {
  switch (action.type) {
    case TYPES.DATE:
      return { ...state, date: action.value as string }
    case TYPES.TIME:
      return { ...state, time: action.value as string }
    case TYPES.DATE_TIME: {
      const { date, time } = action.value as DateTime
      return { ...state, date, time }
    }
    default:
      return state
  }
}

export { timerReducer, timerActions }
