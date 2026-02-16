import type { NextConfig } from "next";
const dns = require("dns");
dns.setDefaultResultOrder("ipv4first");
const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
