export const TYPES = {
  DATE: 'DATE',
  TIME: 'TIME',
  DATE_TIME: 'DATE_TIME',
} as const

export const timerReducer = (state, action) => {
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
