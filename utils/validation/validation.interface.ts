import { ObjectKeyStringReturnArrayOfStringI } from '@interfaces/common/common.interface'

export interface DataReturnValidationI {
	isValid: boolean
	errors: ObjectKeyStringReturnArrayOfStringI
}
