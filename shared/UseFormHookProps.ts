import {
  DeepMap,
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
} from 'react-hook-form'

type UseFormHookProps = {
  register: UseFormRegisterReturn
  errors: DeepMap<FieldValues, FieldErrors>
}

export default UseFormHookProps
