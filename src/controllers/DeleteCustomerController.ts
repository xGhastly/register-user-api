import { FastifyRequest, FastifyReply } from 'fastify';
import { DeleteCustomerService } from '../services/DeleteCustomerService';

class DeleteCustomerController {
    private deleteService: DeleteCustomerService;

    constructor(deleteService: DeleteCustomerService) {
        this.deleteService = deleteService;
    }

    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.query as { id: string };

        const customer = await this.deleteService.execute({ id });

        reply.send(customer);
    }
}

export { DeleteCustomerController };
