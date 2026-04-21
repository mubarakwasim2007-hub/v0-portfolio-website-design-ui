/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { 
    unoptimized: true,
  },
  basePath: '/v0-portfolio-website-design-ui',
  assetPrefix: '/v0-portfolio-website-design-ui',
  trailingSlash: true, 
};

export default nextConfig;
