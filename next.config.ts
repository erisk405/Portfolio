import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "res.cloudinary.com",
          pathname: "/dgfwfpxvg/**", // เปลี่ยน your-cloud-name เป็นชื่อ account ของคุณ
        },
      ],
    },
};

export default nextConfig;
