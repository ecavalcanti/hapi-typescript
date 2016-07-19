import {IServerConfig, IRepositoryConfig} from './interfaces'

export default class Configurations implements IServerConfig,IRepositoryConfig {

    private config : any;

    constructor() {
        const env = process.env.NODE_ENV || "dev";
        this.config = require(`./configurations.${env}`).default();
    }

    get connectionString() {
        return this.config.repository.connectionString;
    }

    get port() {
        return this.config.server.port;
    }

};