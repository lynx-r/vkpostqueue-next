import Button from '@/components/base/Button'
import Textarea from '@/components/base/Textarea'
import {
  FIELD_REQUIRED_ERROR,
  INVALID_VK_AUTH_URL_ERROR,
  QUEUE_URL,
} from '@/config'
import useSetUserAuth from 'hooks/useSetUserAuth'
import getConfig from 'next/config'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

const { publicRuntimeConfig } = getConfig()
const { vkAuthorizeUrl, vkAuthWindow } = publicRuntimeConfig

const Auth: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const { push } = useRouter()
  const setUserAuth = useSetUserAuth()
  const [tokenCreatedAt, setTokenCreatedAt] = useState(new Date().getTime())

  const onSubmit = ({ accessTokenUrl }) => {
    const url = accessTokenUrl.trim()
    const accessToken = url.match(/access_token=(\w+)/)[1]
    const userId = +url.match(/user_id=(\w+)/)[1]
    const auth = { accessToken, userId }

    const expiresIn = +url.match(/expires_in=(\w+)/)[1]
    const date = { tokenCreatedAt, expiresIn }

    setUserAuth(auth, date)
    push(QUEUE_URL)
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
        onClick={() => setTokenCreatedAt(new Date().getTime())}
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
