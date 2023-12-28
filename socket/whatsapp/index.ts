import config from "@config";
import BaseSocket from "../base";
import { CallbackDataType } from "../socket.interface";
import { WhatsappSocketRoomEnum } from "./whatsapp.interface";

export class WhatsappSocket extends BaseSocket {
    constructor() {
        super(`${config.server.url}/whatsapp`);
    }

    public IsConnected(){
        return this.socket.connected
    }

    public listenQR(callback: CallbackDataType<string>) {
        this.listen<string, string>(WhatsappSocketRoomEnum.LISTEN_QR, (data) => callback(data));
    }

    public listenReady(callback: CallbackDataType<boolean>) {
        this.listen<boolean, string>(WhatsappSocketRoomEnum.LISTEN_READY, (data) => callback(data));
    }

    public logout(callback: CallbackDataType<boolean>) {
        this.listen<boolean, string>(WhatsappSocketRoomEnum.LISTEN_LOGOUT, (data) => callback(data));
    }
}

const whatsappSocket = new WhatsappSocket()
export default whatsappSocket