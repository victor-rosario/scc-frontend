import { MeAccountInformationI } from "@interfaces/models/me.interface";
import { Memory } from "./base";
import config from "@config";

class AccountMemory extends Memory<string, MeAccountInformationI> {

    private static instance: AccountMemory;
    private readonly key: string = config.nameMeHeader;

    private constructor() {
        super();
    }

    public static getInstance(): AccountMemory {
        if (!AccountMemory.instance) {
            AccountMemory.instance = new AccountMemory();
        }

        return AccountMemory.instance;
    }

    public addAccount(account: MeAccountInformationI, timeOut = 0): void {
        this.add(this.key, account);

        if (timeOut > 0) {
            setTimeout(() => {
                this.removeAccount();
            }, timeOut);
        }
    }

    public getAccount(): MeAccountInformationI | undefined {
        return this.get(this.key);
    }

    public removeAccount(): void {
        this.remove(this.key);
    }

}

const accountMemory = AccountMemory.getInstance();

export default accountMemory;