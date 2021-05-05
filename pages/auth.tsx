import Button from '@/components/base/Button'
import Textarea from '@/components/base/Textarea'
import { FIELD_REQUIRED_ERROR, INVALID_VK_AUTH_URL_ERROR } from '@/config'
import getConfig from 'next/config'
import { FC } from 'react'
import { useForm } from 'react-hook-form'

const { publicRuntimeConfig } = getConfig()

const { vkAuthorizeUrl, vkAuthWindow } = publicRuntimeConfig

const Auth: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, isDirty, errors },
  } = useForm()

  const onSubmit = (formData) => {
    alert(JSON.stringify(formData))
  }

  const vkAuthUrlRegisterOpts = {
    required: FIELD_REQUIRED_ERROR,
    validate: (value) =>
      (!!value &&
        value.includes('access_token') &&
        value.includes('user_id') &&
        value.includes('expires_in')) ||
      INVALID_VK_AUTH_URL_ERROR,
  }
  return (
    <div>
      <a
        href={vkAuthorizeUrl}
        target="_blank"
        className="bg-blue-300 w-96 block text-center rounded p-2 shadow"
        rel="noreferrer"
      >
        {vkAuthWindow
          ? 'Получить ссылку авторизации в ВКонтакте'
          : 'Авторизоваться в Vk.com'}
      </a>
      <form>
        <Textarea
          register={register('accessTokenUrl', vkAuthUrlRegisterOpts)}
          errors={errors}
        >
          Скопируйте &quot;ссылку авторизации&quot; из открывшейся вкладки
        </Textarea>
        <Button onClick={handleSubmit(onSubmit)}>Продолжить</Button>
      </form>
    </div>
  )
}

export default Auth
