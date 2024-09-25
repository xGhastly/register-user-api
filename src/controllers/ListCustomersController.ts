import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCustomersService } from '../services/ListCustomersService';

class ListCustomersController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const ListCustomerService = new ListCustomersService();
        const costumers = await ListCustomerService.execute();

        reply.send(costumers);
    }
}

export { ListCustomersController };
