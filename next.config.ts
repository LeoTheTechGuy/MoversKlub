import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
  
  // Compress responses
  compress: true,
  
  // Generate ETags for caching
  generateEtags: true,
  
  // Powered by header disabled for security
  poweredByHeader: false,
  
  // Trailing slash consistency
  trailingSlash: false,
};

export default nextConfig;
