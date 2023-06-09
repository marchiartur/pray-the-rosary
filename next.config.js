/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
// Config got from Renaud ROHLINGER <https://twitter.com/onirenaud

/** @type {import('next').NextConfig} */
const plugins = require('next-compose-plugins')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextTranslate = require('next-translate-plugin')

const withTM = require('next-transpile-modules')([
  'antd-mobile'
])

const nextConfig = {
  reactStrictMode: false,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true
  },
  ...nextTranslate({
    webpack: (config, { isServer }) => {
      // audio support
      config.module.rules.push({
        test: /\.(ogg|mp3|wav|mpe?g)$/i,
        exclude: config.exclude,
        use: [
          {
            loader: require.resolve('url-loader'),
            options: {
              limit: config.inlineImageLimit,
              fallback: require.resolve('file-loader'),
              publicPath: `${config.assetPrefix}/_next/static/images/`,
              outputPath: `${isServer ? '../' : ''}static/images/`,
              name: '[name]-[hash].[ext]',
              esModule: config.esModule || false
            }
          }
        ]
      })

      // shader support
      config.module.rules.push({
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ['raw-loader', 'glslify-loader']
      })

      return config
    }
  })
}

module.exports = plugins(
  [
    [
      {
        workboxOpts: {
          swDest: process.env.NEXT_EXPORT
            ? 'service-worker.js'
            : 'static/service-worker.js',
          runtimeCaching: [
            {
              urlPattern: /^https?.*/,
              handler: 'NetworkFirst',
              options: {
                cacheName: 'offlineCache',
                expiration: {
                  maxEntries: 200
                }
              }
            }
          ]
        },
        async rewrites () {
          return [
            {
              source: '/service-worker.js',
              destination: '/_next/static/service-worker.js'
            }
          ]
        }
      }
    ],
    withBundleAnalyzer
  ],
  withTM(nextConfig)
)
