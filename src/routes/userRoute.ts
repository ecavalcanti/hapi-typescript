import * as Hapi from 'hapi';
import UserController from '../controllers/userController';

export default function(server: Hapi.Server) {

    const userController = new UserController(server);
    
    server.route({
        method:'POST',
        path:'/user',
        handler: userController.create,
        config: {
            description: 'Create user',
            notes: 'Create a user',
            tags:['api']
        }
    });

    
}