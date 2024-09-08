strict mode if i utilize server action in next.js add this line of codes:
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions: true,
    }
};

export default nextConfig;
