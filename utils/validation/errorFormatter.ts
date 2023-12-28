import { ObjectKeyDynamicI, ObjectKeyStringReturnArrayOfStringI } from '@interfaces/common/common.interface'

export const ErrorFormatterIntoObject = (errors: ObjectKeyStringReturnArrayOfStringI): ObjectKeyDynamicI => {
	let object: ObjectKeyDynamicI = {}
	Object.keys(errors).map((key) => (object = { ...object, [key]: errors[key][0] || '' }))
	return object
}
