export const signInRules = {
	email: {
		isRequired: { message: 'Correo electrónico es requerido' },
		isEmailValid: { message: 'Correo electrónico no es válido' }
	},
	password: {
		isRequired: { message: 'Contraseña es requerida' }
	}
}
