export const signInRules = {
	identification: {
		isRequired: { message: 'Correo electrónico o cédula es requerido' }
	},
	password: {
		isRequired: { message: 'Contraseña es requerida' }
	}
}
