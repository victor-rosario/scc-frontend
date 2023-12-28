import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const isFileRegex = /(api|_next\/static|_next\/image|favicon\.ico|\/_next)/

export async function middleware(request: NextRequest) {
	const url = request.nextUrl.clone()
	const response = NextResponse.next()

	if (isFileRegex.test(url.pathname)) return response

	return response
}

export const returnUrl = (req: NextRequest, path: string, params: string = '') => {
	const url = req.nextUrl.clone()
	const urlFormatted = `${url.origin}${path}?${params}`
	return urlFormatted
}
