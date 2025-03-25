/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ["drive.google.com"], // Разрешаем Google Drive
    unoptimized: true, // Отключаем оптимизацию
  },
};

module.exports = nextConfig;
