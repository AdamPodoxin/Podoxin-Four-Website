/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/addgooglereview",
				destination: "https://g.page/r/CUnyj4VkPKjhEBM/review",
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;
