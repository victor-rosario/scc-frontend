export interface MeAccountInformationI {
	uuid: string
	createdAt: string
	email: string
	active: boolean
	firstName: string
	lastName: string
	role: IRole
	info: InfoI
	tokenSocket: string
}

interface IRole {
	name: string
	slug: string
}

interface InfoI {
	userName: string
	nationality: string
	identification: string
	identificationType: string
	birthDate: string
	phone: string
	mobile: string
	gender: string
	conversationAbility: boolean
	institutionName: string
	rnc: string
	institutionPosition: string
}
