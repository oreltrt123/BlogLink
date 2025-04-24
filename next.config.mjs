/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    images: {
      unoptimized: true,
    },
    // Enable hostname rewrites for subdomains
    async rewrites() {
      return {
        beforeFiles: [
          // For local development, rewrite blog.localhost:3000 to localhost:3000/blog
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                value: 'blog.localhost:3000',
              },
            ],
            destination: '/blog/:path*',
          },
          // Also handle blog.localhost without port
          {
            source: '/:path*',
            has: [
              {
                type: 'host',
                value: 'blog.localhost',
              },
            ],
            destination: '/blog/:path*',
          },
        ],
      };
    },
  };
  
  export default nextConfig;
  