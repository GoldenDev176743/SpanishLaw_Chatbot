/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: "http://138.201.123.93:5000/api/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
