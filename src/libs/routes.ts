import * as fs from 'fs';
import * as Hapi from "hapi";

export default function(server: Hapi.Server) {

// load routes
const plugins_dir:string = `${__dirname}/routes`;
const plugins:any[] = fs.readdirSync(`${__dirname}/routes`)
  .filter((file) => {
    return file.match(/^[^.]/) != null && fs.statSync(`${plugins_dir}/${file}`).isFile();
  })
  .map((file) => {
      let Plugin = require(`./routes/${file}`).default;
      let plugin = new Plugin(); 
      return { 
          register: plugin
      }
  });

}