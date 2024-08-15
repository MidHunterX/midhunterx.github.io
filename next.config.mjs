/** @type {import('next').NextConfig} */
const nextConfig = {

  // Enable static exports for the App Router.
  // https://nextjs.org/docs/app/building-your-application/deploying/static-exports
  output: 'export',


  // █▀ █░█ █▀▀   █▀▀ █▀█ █▀▄▀█ █▀█ █▀█ █▄░█ █▀▀ █▄░█ ▀█▀ █▀
  // ▄█ ▀▄▀ █▄█   █▄▄ █▄█ █░▀░█ █▀▀ █▄█ █░▀█ ██▄ █░▀█ ░█░ ▄█
  // =======================================================

  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg'),
    )
    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      },
    )
    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i
    return config
  },


  // █▀▀ █ ▀█▀ █░█ █░█ █▄▄   █▀█ ▄▀█ █▀▀ █▀▀ █▀
  // █▄█ █ ░█░ █▀█ █▄█ █▄█   █▀▀ █▀█ █▄█ ██▄ ▄█
  // ==========================================

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
