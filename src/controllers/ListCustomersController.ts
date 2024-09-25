import { FastifyRequest, FastifyReply } from 'fastify';
import { ListCustomersService } from '../services/ListCustomersService';

class ListCustomersController {
    private listCustomersService: ListCustomersService;

    constructor(listCustomersService: ListCustomersService) {
        this.listCustomersService = listCustomersService;
    }

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const customers = await this.listCustomersService.execute();
        reply.send(customers);
    }
}

export { ListCustomersController };
