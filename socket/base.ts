import { io, Socket, } from "socket.io-client"
import { CallbackDataType, SocketOptionsI } from "./socket.interface"
import { ObjectKeyDynamicI } from "@interfaces/common/common.interface"

class BaseSocket {
    protected socket: Socket = {} as Socket
    private readonly apiUrl: string
    private readonly config: Partial<SocketOptionsI>

    constructor(apiUrl: string, config: Partial<SocketOptionsI> = {}) {
        this.apiUrl = apiUrl
        this.config = config
    }

    public connect(params: ObjectKeyDynamicI) {
        this.socket = io(`${this.apiUrl}`, {
            reconnection: true,
            autoConnect: true,
            rejectUnauthorized: false,
            reconnectionDelay: 500,
            withCredentials: true,
            reconnectionAttempts: Infinity,
            transports: ["websocket"],
            ...this.config,
            query: params
        })
    }

    public listen<T, E>(eventName: E, callback: CallbackDataType<T>) {
        this.socket.removeAllListeners(`${eventName}`)
        this.socket.on(`${eventName}`, (data: T) => callback(data))
    }

    public emit<T, E>(eventName: E, data: T) {
        this.socket.emit(`${eventName}`, data)
    }

    public removeListenerFunctions(eventName: string) {
        this.socket.removeAllListeners(eventName)
    }

    public once(eventName: string, listenerFunction: (_data: any) => void) {
        this.socket.once(eventName, (data) => listenerFunction(data))
    }

    public off(eventName: string, listenerFunction: (_data: any) => void) {
        this.socket.off(eventName, (data) => listenerFunction(data)).on(eventName, (data) => listenerFunction(data))
    }

    public emitWithTimer(eventName: string, resultFunction: (_data: any) => void, timer?: number) {
        this.socket.timeout(timer || 5000).emit(eventName, resultFunction)
    }

    public disconnect() {
        this.socket.disconnect()
        this.socket.close()
    }
}


export default BaseSocket