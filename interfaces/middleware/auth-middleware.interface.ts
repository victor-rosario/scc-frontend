import { NextRequest } from "next/server"

export interface ValidateAuthI {
	cookies: string | null
	req: NextRequest
}
