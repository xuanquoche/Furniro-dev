import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        domains: [
            'localhost',
            'example.com',
            'furniro-dev-ap-southeast-1.s3.ap-southeast-1.amazonaws.com'
        ]
    }
};

export default nextConfig;
