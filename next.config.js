const path = require('path')
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
  unstable_JsPreload: false,
  async headers() {
    return [
    {
      source: "*",
      headers: [
     { key: "Access-Control-Allow-Credentials", value: "true" },
     { key: "Access-Control-Allow-Origin", value: "*" },
     { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
     { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" }
    ]
    }
    ]
},
  async redirects() {
    return [
      {
        source: '/seo-digital-marketing',
        destination: '/seo-services',
        permanent: true,
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  trailingSlash: true,

}
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({})