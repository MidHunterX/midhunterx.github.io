/** @type {import('next').NextConfig} */
const nextConfig = {

  // Enable static exports for the App Router.
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: 'export',

  // Deploy under subpath of a domain. This is the slug of your GitHub repository.
  // https://nextjs.org/docs/app/api-reference/next-config-js/basePath
  // Not Needed as midhunterx.github.io is the main domain
  // basePath: "/Portfolio",

  // GitHub uses Jekyll by default to build static pages, and Jekyll ignores all files prefixed with _
  // https://nextjs.org/docs/app/api-reference/next-config-js/assetPrefix
  // Not Needed as I'm using GitHub Actions instead of Default
  // assetPrefix: "./",

  // Disable server-based image optimization. Next.js does not support dynamic features with static exports.
  // https://nextjs.org/docs/app/api-reference/components/image#unoptimized
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
