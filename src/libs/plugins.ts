import * as fs from "fs";
import * as Hapi from "hapi";
import * as path from "path";
import { IPlugin } from "./plugins/interfaces";

export default function(server: Hapi.Server) {

    // load routes
    const pluginsPath = __dirname + '/plugins/';
    const plugins = fs.readdirSync(pluginsPath).filter(file => fs.statSync(path.join(pluginsPath, file)).isDirectory());

    plugins.forEach((pluginName: string) => {
        var plugin: IPlugin = (require("./plugins/" + pluginName)).default();      
        console.log(`Register Plugin ${plugin.info().name} v${plugin.info().version}`);
        plugin.register(server);
    });

}