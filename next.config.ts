import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/user/:path*",
        destination: "http://localhost:8080/user/:path*",
      },
      {
        source: "/ingredient/:path*",
        destination: "http://localhost:8080/ingredient/:path*",
      },
    ]
  },
}

export default nextConfig
