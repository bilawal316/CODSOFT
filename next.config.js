/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add your other Next.js configuration options here

  // Enable the experimental 'images' feature
  experimental: {
    images: true,
  },

  // Specify the 'output' option
  output: "static",
};

module.exports = nextConfig;
