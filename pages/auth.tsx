import getConfig from 'next/config'
import { FC } from 'react'

const { publicRuntimeConfig } = getConfig()

const { vkAuthorizeUrl, vkAuthWindow } = publicRuntimeConfig

const Auth: FC = () => {
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
    </div>
  )
}

export default Auth
