/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // ✅ Enable static export for Netlify
  output: "export",

  images: {
    unoptimized: true // needed for Netlify static export
  }
}

module.exports = nextConfig;
