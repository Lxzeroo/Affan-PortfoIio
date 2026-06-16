import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // Optional: Change links `/me` => `/me/` and emit `/me.html` => `/me/index.html`
  // trailingSlash: true,
  // Optional: Prevent automatic /me instead of /me#
  // skipTrailingSlashRedirect: true,
};

export default nextConfig;