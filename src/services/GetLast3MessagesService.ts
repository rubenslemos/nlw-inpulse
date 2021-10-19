import prismaClient from "../prisma";
import { io } from "../app";
class GetLast3MessagesService {
    async execute() {
        try {

            const message = await prismaClient.message.findMany({
                take: 3,
                orderBy: {
                    created_at: "desc"
                },
                include: {
                    user: true
                }
            })
            return message
        } catch (err) {
            return "Falha ao exibir mensagens"
        }
    }
}
export {GetLast3MessagesService}