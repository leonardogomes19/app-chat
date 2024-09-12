import { config } from 'dotenv';
config(); // Carrega variáveis de ambiente do .env

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Outras configurações...
};

export default nextConfig;