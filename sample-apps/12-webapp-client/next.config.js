/**
 * Using next-transpile-modules
  * Source: https://github.com/cloudscape-design/components/issues/74/
*/

const withTM = require('next-transpile-modules')(['@cloudscape-design/components']);

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone'
}

module.exports = withTM(nextConfig);
