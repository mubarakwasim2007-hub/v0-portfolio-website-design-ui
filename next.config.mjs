/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  // This matches your repository name so CSS and Images load correctly
  basePath: '/v0-portfolio-website-design-ui',
  assetPrefix: '/v0-portfolio-website-design-ui',
};

export default nextConfig;
