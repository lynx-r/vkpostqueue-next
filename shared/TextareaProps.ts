import { TextareaHTMLAttributes } from 'react'
import {
  DeepMap,
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form'

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  register: UseFormRegisterReturn
  errors: DeepMap<FieldValues, FieldErrors>
}
