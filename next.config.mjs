/** @type {import('next').NextConfig} */



const nextConfig = {};

export default nextConfig;

const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  reactStrictMode: true,
  // otras configuraciones
});