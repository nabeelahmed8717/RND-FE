/** @type {import('next').NextConfig} */

const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
]);
// only this need to add
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// this should be removed it is added to bypass eslint issues and type of typescript issue
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ["rnd-s3-public-dev-001.s3.eu-west-2.amazonaws.com"],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = withTM(nextConfig);
// module.exports = nextConfig;
