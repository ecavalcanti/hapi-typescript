export namespace Configuration {
    
    const configFile = require('../config.json');
    const env = process.env.NODE_ENV || "development";
    
    console.log(`Running enviroment ${env}`);

    export function config() {
        return configFile[env];
    }
}