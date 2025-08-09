import type { NextConfig } from "next";

const nextConfig = {
	webpack: (config) => {
		config.infrastructureLogging = { level: 'error' };
		return config;
	},
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
