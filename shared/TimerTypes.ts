import { TYPES } from '@/reducers'
import { Reducer } from 'react'

export type OppOnHours = 'add' | 'sub'
export type DateTime = { date: string; time: string }
export type TimerState = DateTime
export type TimerAction = { type: keyof typeof TYPES; value: DateTime | string }

export type UseTimerHelper = () => {
  state: TimerState
  nearest: () => void
  roundTime: () => void
  addHours: (hours: number) => void
  subHours: (hours: number) => void
  setDateTime: (dateTime: DateTime) => void
}

export type TimerReducer = Reducer<TimerState, TimerAction>
