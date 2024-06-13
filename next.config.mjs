/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [
      { hostname: 'cdn.myanimelist.net' },
      { hostname: 'avatars.githubusercontent.com' },
      { hostname: 'img.youtube.com' },
      { hostname: 'img1.ak.crunchyroll.com' }
    ],
  },
}

export default nextConfig
