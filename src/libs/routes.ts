import * as fs from "fs";
import * as Hapi from "hapi";
import * as path from "path";

export default function(server: Hapi.Server) {
  
    // load routes
    const routesPath = `${__dirname}/../routes`;
    const files = fs.readdirSync(routesPath).filter(file => {
      const filePath = path.join(routesPath, file);
      return fs.statSync(filePath).isFile() && path.extname(filePath) == '.js';
    });

    files.forEach((fileName: string) => {
        let Route = require(`${routesPath}/${fileName}`).default;
        let route = new Route(server); 
    });

}