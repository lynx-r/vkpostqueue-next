export const NEWS_IN_QUEUE = 'Новость поставлена в очередь'
export const NEWS_QUEUE_REMOVED = 'Запись удалена из очереди'
export const NEWS_NOT_FOUND = 'Запись на удаление не найдена'
export const NEWS_RENAMED = 'Запись переименована'
export const NEWS_QUEUE_ERROR_AUTH = 'Обновите ссылку авторизации'

export const FIELD_REQUIRED_ERROR = '* поле обязательно'
export const INVALID_VK_AUTH_URL_ERROR = '* неверная ссылка авторизации'
export const DATE_IN_PAST_ERROR = '* дата в прошлом'
export const TIME_IN_PAST_ERROR = '* время в прошлом'
export const ALLOWED_MIMES_ERROR = (allowedMimes: string): string =>
  `* доступные типы файлов: ${allowedMimes}`
