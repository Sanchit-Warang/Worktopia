/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
module.exports = {
    async rewrites() {
      return [
        {
          source: '/api/:path*', // Define the source path for your API requests
          destination: 'http://localhost:8000/api/:path*', // Specify the destination URL of your API
        },
      ];
    },
  };
  
