// eslint-disable-next-line import/no-extraneous-dependencies,@typescript-eslint/no-var-requires
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin').default

module.exports = {
  future: {
    webpack5: true,
  },
  serverRuntimeConfig: {
    privateVapidKey: process.env.PRIVATE_VAPID_KEY,
  },
  publicRuntimeConfig: {
    checkPostIntervalMin: process.env.CHECK_POST_INTERVAL_MIN,
    checkPostQueue: process.env.CHECK_POST_QUEUE_ACTION,
    publicVapidKey: process.env.PUBLIC_VAPID_KEY,
    groupId: process.env.VK_GROUP_OWNER_ID,
    // приложение будет работать, только для этого пользователя в случае авторизации через Implicit Flow
    vkUserId: process.env.VK_USER_ID,
    vkAuthorizeUrl:
      process.env.VK_AUTH_TYPE === 'window'
        ? process.env.VK_AUTH_WINDOW_URL
        : process.env.VK_AUTH_IMPLICIT_URL,
    vkAuthWindow: process.env.VK_AUTH_TYPE === 'window',
  },
  webpack: (config) => {
    config.plugins.push(
      new WindiCSSWebpackPlugin({
        scan: {
          dirs: ['./'],
          exclude: ['node_modules', '.git', '.next/**/*'],
          // dirs: ['./'],
          // exclude: ['node_modules/**/*', '.git/**/*', '.next/**/*'],
        },
      }),
    )
    return config
  },
}
