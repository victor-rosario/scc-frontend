export interface MeAccountInformationI {
	uuid: string
	createdAt: string
	email: string
	active: boolean
	validated: boolean
	// TODO: ROlE
	role: any
	info: InfoI
	isSuper?: boolean
	tokenSocket: string
}

export interface InfoI {
	uuid: string
	createdAt: string
	userName: string
	firstName: string
	lastName: string
	phoneNumber: string
	mobilePhoneNumber: string
	whatsAppPhoneNumber: string
}
