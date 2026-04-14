import type { NextConfig } from "next";
import path from "path";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  allowedDevOrigins: ["10.0.0.134"],
  compress: true,
  poweredByHeader: false,
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
