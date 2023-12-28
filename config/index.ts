const config = {
	server: {
		url: process.env.NEXT_PUBLIC_SERVER_URL || ''
	},
	app: {
		url: process.env.NEXT_PUBLIC_APP_URL || ''
	},
	nameMeHeader: 'X-USER-DATA'
}

console.log("config: ", config)

export default config
