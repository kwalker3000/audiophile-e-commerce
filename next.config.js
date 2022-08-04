/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

//module.exports = nextConfig


module.exports = {
    nextConfig,
    images: {
	domains: ['res.cloudinary.com', 'avatars.githubusercontent.com' ]
    }
}
