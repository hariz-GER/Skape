/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS === 'true';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserOrOrgPages = repo.endsWith('.github.io');
const basePath = isGithubActions && repo && !isUserOrOrgPages ? `/${repo}` : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined
};

module.exports = nextConfig;
