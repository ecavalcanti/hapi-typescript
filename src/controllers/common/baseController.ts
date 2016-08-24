import * as Hapi from "hapi";

export default class BaseController {
    protected server: Hapi.Server;

    constructor(server: Hapi.Server) {
        this.server = server;
    }

}