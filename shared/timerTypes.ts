import { Reducer } from 'react'

export const TYPES = {
  DATE: 'DATE',
  TIME: 'TIME',
  DATE_TIME: 'DATE_TIME',
} as const

export type OppOnHours = 'add' | 'sub'
export type DateTime = { date: string; time: string }
export type TimerState = DateTime
export type TimerAction = { type: keyof typeof TYPES; value: DateTime | string }

export type TimerReducer = Reducer<TimerState, TimerAction>

export type TimerReducerHook = {
  state: TimerState
  nearest: () => void
  roundTime: () => void
  addHours: (hours: number) => void
  subHours: (hours: number) => void
  setDate: (date: string) => void
  setTime: (time: string) => void
  setDateTime: (dateTime: DateTime) => void
}
