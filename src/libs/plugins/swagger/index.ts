import {IPlugin, IPluginInfo} from "../interfaces";
import * as Hapi from "hapi";

export default (): IPlugin => {
    return {
        register: (server: Hapi.Server) => {
            server.register([
                require('inert'),
                require('vision'),
                {
                    register: require('hapi-swagger'),
                    options: {
                        info: {
                            title: 'hapi-typescript',
                            description: 'hapi-typescript api.',
                            version: '1.0'
                        },
                        tags: [
                            {
                                'name': 'hapi-typescript',
                                'description': 'hapi-typescript interface.'
                            }
                        ],
                        documentationPath: '/docs'
                    }
                }
            ]
                , (error) => {
                    if (error) {
                        console.log('error', error);
                    }
                });
        },
        info: () => {
            return {
                name: "Swagger Documentation",
                version: "1.0.0"
            };
        }
    };
};