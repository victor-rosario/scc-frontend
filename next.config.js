/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		domains: ['localhost']
	},
	transpilePackages: [
		'mui-tel-input',
		'mui-file-input'
	]
}

module.exports = nextConfig
