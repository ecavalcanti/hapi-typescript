import * as Hapi from "hapi";
import Routes from "./libs/routes";
import Plugins from "./libs/plugins";
import * as path from "path";
import * as fs from "fs";
import {Configuration} from "./config/configuration";

const port = process.env.port || Configuration.config().server.port;
const server = new Hapi.Server();

server.connection({
    port: port,
    routes: {
        cors: true
    }
});

// Setup Hapi Plugins
Plugins(server);

// Register Routes
Routes(server);

export default server;