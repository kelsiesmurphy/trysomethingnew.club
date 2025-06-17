/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    remotePatterns: [
      new URL("https://picsum.photos/**"),
      new URL(
        "https://images.ctfassets.net/bn4qv24m6mjc/4ZZb3vEL3JGkbmiwqjtAXY/**"
      ),
    ],
  },
};

export default nextConfig;
