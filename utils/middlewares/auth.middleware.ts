import config from '@config'
import { ServerResponse } from 'http'
import { NextPageContext } from 'next'

const notAuth = (path: string, res: ServerResponse) => {
	if (path.includes('auth')) return { props: {} }
	res.writeHead(301, { Location: '/auth/login' })
	return res?.end()
}

const handleInitialProps = async ({ res, asPath }: NextPageContext) => {
	if (!res) return { props: {} }

	const userHeader = res.getHeader(config.nameMeHeader) as string
	if (!userHeader) return notAuth(asPath as string, res)

	try {
		const response = JSON.parse(userHeader)

		if (!response?.account?.uuid) return notAuth(asPath as string, res)

		return {
			props: {
				account: response.account || {},
				permissions: response.permissions || [],
			}
		}
	} catch (error) {
		console.error('JSON.parse userHeader', error)
		return notAuth(asPath as string, res)
	}
}

export default handleInitialProps
