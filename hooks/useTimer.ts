import { TimerHelper, TimerReducer } from '@/shared'
import { useReducer } from 'react'
import { timerActions, timerReducer } from '@/reducers'
import { formatDate, getRoundedTimeFromDate } from 'shared/timeUtils'

const useTimer = (): TimerHelper => {
  const [state, dispatch] = useReducer<TimerReducer>(timerReducer, {
    date: formatDate(new Date()),
    time: getRoundedTimeFromDate(new Date()),
  })

  return {
    state,
    ...timerActions(dispatch, state),
  }
}

export default useTimer
