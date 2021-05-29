import Timer from '@/components/post/Timer'
import useTimerReducer from '@/hooks/useTimerReducer'
import { TimerContext } from '@/shared'
import { FC } from 'react'

const Queue: FC = () => {
  const timerReducer = useTimerReducer()
  return (
    <TimerContext.Provider value={timerReducer}>
      <Timer />
      {timerReducer.state.date}
      {timerReducer.state.time}
    </TimerContext.Provider>
  )
}

export default Queue
