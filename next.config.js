module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/nav/AccountBook',
        permanent: true,
      },
    ]
  },
}
