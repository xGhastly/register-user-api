import {
    FastifyInstance,
    //FastifyPluginOptions,
    FastifyRequest,
    FastifyReply,
} from 'fastify';
import { CreateCustomerService } from './services/CreateCustomerService';
import { CreateCustomerController } from './controllers/CreateCustomerController';
import { ListCustomersService } from './services/ListCustomersService';
import { ListCustomersController } from './controllers/ListCustomersController';
import { DeleteCustomerService } from './services/DeleteCustomerService';
import { DeleteCustomerController } from './controllers/DeleteCustomerController';

export async function routes(
    fastify: FastifyInstance,
    //options: FastifyPluginOptions,
) {
    fastify.get('/teste', async () => {
        return { ok: true };
    });

    fastify.post(
        '/customer',
        async (request: FastifyRequest, reply: FastifyReply) => {
            const customerService = new CreateCustomerService();
            return new CreateCustomerController(customerService).handle(
                request,
                reply,
            );
        },
    );

    fastify.get(
        '/customers',
        async (request: FastifyRequest, reply: FastifyReply) => {
            const listService = new ListCustomersService();
            return new ListCustomersController(listService).handle(
                request,
                reply,
            );
        },
    );

    fastify.delete(
        '/customer',
        async (request: FastifyRequest, reply: FastifyReply) => {
            const deleteService = new DeleteCustomerService();
            return new DeleteCustomerController(deleteService).handle(
                request,
                reply,
            );
        },
    );
}
