import type { NextConfig } from "next";

const nextConfig = {
	reactStrictMode: true,
	experimental: {
		nextScriptWorkers: false,
		serverActions: {
			bodySizeLimit: '2mb',
		},
	},
	devIndicators: {
		appIsRunning: false,
	},
};

module.exports = nextConfig;
