/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: !isProd
});

const nextConfig = withPWA({
  compiler: {
    styledComponents: true
  },
  reactStrictMode: true
});

module.exports = nextConfig;
