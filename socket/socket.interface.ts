export interface SocketOptionsI {
    host: string;
    hostname: string;
    secure: boolean;
    port: string | number;
    query: {
        [key: string]: object;
    };
    agent: string | boolean;
    upgrade: boolean;
    forceBase64: boolean;
    timestampParam: string;
    timestampRequests: boolean;
    transports: string[];
    policyPost: number;
    rememberUpgrade: boolean;
    onlyBinaryUpgrades: boolean;
    requestTimeout: number;
    transportOptions: Object;
    pfx: string;
    key: string;
    passphrase: string;
    cert: string;
    ca: string | string[];
    ciphers: string;
    rejectUnauthorized: boolean;
    extraHeaders?: {
        [header: string]: string;
    };
    withCredentials: boolean;
    closeOnBeforeunload: boolean;
    useNativeTimers: boolean;
    autoUnref: boolean;
    perMessageDeflate: {
        threshold: number;
    };
    path: string;
    protocols: string | string[];
}


export type CallbackDataType<T = object> = (data: T) => void;

export enum EventsSocketEnum{
    SUBSCRIBE = "subscribe",
    UNSUBSCRIBE = "unsubscribe"
}
