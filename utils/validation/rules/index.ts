/**
 *
 * @param {string} template
 * @param {any[]} args
 * @returns
 */
export function printF(template: string, ...args: any[]) {
	return template.replace(/{(\d+)}/g, function (match, number) {
		return typeof args[number] != 'undefined' ? args[number] : match
	})
}

/**
 * validate required input
 * @param {any} field
 * @param {any} fields
 * @returns
 */
const isRequired = (field: any, fields: any, { message }: any) => {
	const response = { error: '', valid: true }

	if (typeof fields[field] == "boolean" && fields[field]) {
		return response
	} else if (typeof fields[field] == "boolean" && !fields[field]) {
		response.valid = false
		response.error = message
		return response
	}

	if (!fields[field] || !`${fields[field]}`.trim()) {
		response.valid = false
		response.error = message
	}

	return response
}

/**
 * check email address
 * @param {any} field
 * @param {any} fields
 * @param {any} param2
 * @returns
 */
const isEmailValid = (field: any, fields: any, { message }: any) => {
	const response = { error: '', valid: true }

	const regex = /\S+@\S+\.\S+/ // anystring@anystring.anystring
	if (!regex.test(fields[field])) {
		response.valid = false
		response.error = message
	}

	return response
}

/**
 * validate min length
 * @param {any} field
 * @param {any} fields
 * @param {any} param2
 * @returns
 */
const isMinLength = (field: any, fields: any, { message, value }: any) => {
	const response = { error: '', valid: true }

	if (value) {
		if (`${fields[field]}`.trim().length < value) {
			response.valid = false
			response.error = printF(message, value)
		}
	}

	return response
}

const isPasswordValid = (
	field: any,
	fields: any,
	{ minLengthMessage, hasDigitMessage, hasSpecialCharacterMessage, hasLowerOrUpperMessage }: any
) => {
	if (fields[field].length < 6) {
		return { error: minLengthMessage, valid: false }
	} else if (!/\d/.test(fields[field])) {
		return { error: hasDigitMessage, valid: false }
	} else if (!/[!@#$%^&*]/.test(fields[field])) {
		return { error: hasSpecialCharacterMessage, valid: false }
	} else if (!/^(?=.*[a-z])(?=.*[A-Z]).*$/gm.test(fields[field])) {
		return { error: hasLowerOrUpperMessage, valid: false }
	} else {
		return { error: '', valid: true }
	}
}

const isEqualPassword = (field: any, fields: any, { message }: any) => {
	if (fields[field] !== fields['password']) {
		return { error: message, valid: false }
	} else {
		return { error: '', valid: true }
	}
}

const isCheck = (field: any, fields: any, { message }: any) => {
	if (!fields[field]) {
		return { error: message, valid: false }
	} else {
		return { error: '', valid: true }
	}
}

export const hasDigit = (field: any, fields: any, { message }: any) => {
	if (/\d/.test(fields[field])) {
		return { error: message, valid: false }
	} else {
		return { error: '', valid: true }
	}
}

export const isPhoneNumberValid = (field: any, fields: any, { message }: any) => {
	if (/^(\d{10}|\d{3}[-\s]?\d{3}[-\s]?\d{4})$/.test(fields[field])) {
		return { error: "", valid: true }
	} else {
		return { error: message, valid: false }
	}
}

const rulesFuncs = {
	isRequired,
	isEmailValid,
	isMinLength,
	isPasswordValid,
	isEqualPassword,
	hasDigit,
	isCheck,
	isPhoneNumberValid
}

export default rulesFuncs
