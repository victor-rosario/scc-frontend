import appConfig from "@config"
import { ValidateAuthI } from '@interfaces/middleware/auth-middleware.interface'
import { MeAccountInformationI } from '@interfaces/models/me.interface'
import accountMemory from "@utils/memory/account.memory"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isFileRegex = /(api|_next\/static|_next\/images|favicon\.ico|\/_next|assets(\/.*)?)/

export async function middleware(request: NextRequest) {
	const url = request.nextUrl.clone()
	const response = NextResponse.next()

	if (isFileRegex.test(url.pathname)) return response

	const isPathAuth = Boolean(url.pathname.includes('auth'))
	const isPathChangePassword = Boolean(url.pathname.includes('auth/change-password'))
	const isPathScheduler = Boolean(url.pathname.includes('auth/scheduler'))

	if (isPathChangePassword) return response
	if (isPathScheduler) return response

	const account = accountMemory.getAccount()
	if (account) {
		return response
	}

	const cookies = request.headers.get('Cookie')

	const user = await getUser({ cookies, req: request })
	const isSuperAdmin = Boolean(user?.role.slug === 'super-admin')

	if (user && isPathAuth) {
		url.pathname = '/'
		return NextResponse.redirect(url)
	} else if (!user && !isPathAuth) {
		url.pathname = '/auth/login'
		return NextResponse.redirect(url)
	}

	if (user) {
		response.headers.set(appConfig.nameMeHeader, JSON.stringify({ account: user, isSuperAdmin }))
		accountMemory.addAccount(user)
	}

	if (isSuperAdmin) return response

	return response
}

export const returnUrl = (req: NextRequest, path: string, params: string = '') => {
	const url = req.nextUrl.clone()
	const urlFormatted = `${url.origin}${path}?${params}`
	return urlFormatted
}

export const getUser = async ({ cookies, req }: ValidateAuthI): Promise<MeAccountInformationI | null> => {
	return new Promise((resolve) => {
		const url = req.nextUrl.clone()
		fetch(`${appConfig.server.url}/api/auth/me`, {
			credentials: 'include',
			method: 'GET',
			headers: {
				Cookie: `${cookies}`,
				Origin: appConfig.app.url || url.origin
			}
		})
			.then((result) => result.json())
			.then((response) => {
				resolve(response.error ? null : response)
			})
			.catch((error) => [console.error({ error }), resolve(null)])
	})
}