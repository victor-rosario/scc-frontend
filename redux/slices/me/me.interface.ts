import { MeAccountInformationI } from "@interfaces/models/me.interface";

export interface MeSliceI {
	account: MeAccountInformationI | null;
	isSuperAdmin: boolean
}
