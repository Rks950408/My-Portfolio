// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

// export default nextConfig
// next.config.mjs
export default {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/My-Portfolio',
  trailingSlash: true,
};
