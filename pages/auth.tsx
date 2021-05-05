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
    formState: { errors },
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
    <div className="flex flex-col space-y-4">
      <a
        href={vkAuthorizeUrl}
        target="_blank"
        className="button-primary w-96"
        rel="noreferrer"
      >
        {vkAuthWindow
          ? 'Получить ссылку авторизации в ВКонтакте'
          : 'Авторизоваться в Vk.com'}
      </a>
      <form className="flex items-center space-x-4">
        <Textarea
          className="h-40"
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
