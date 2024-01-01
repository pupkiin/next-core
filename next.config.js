/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:3000/:path*",
      }
    ]
  }
}

module.exports = nextConfig
