/// <reference path="../typings/index.d.ts" />
import Server from "./server";

//Starting Application Server
Server.start(() => {
    console.log('Server running at:', Server.info.uri);
});