import prismaClient from '../prisma';

interface UpdateCustomerProps {
    name: string;
    email: string;
}

class UpdateCustomerServie {
    constructor() {}

    async updateCustomer({ name, email }: UpdateCustomerProps) {
        const updatedUser = await prismaClient.customer.update({
            where: {
                name: name,
                email: email,
            },
            data: {
                name,
                email,
            },
        });
        return updatedUser;
    }
}
export { UpdateCustomerServie };
