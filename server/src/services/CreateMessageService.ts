import prismaClient from '../prisma'

interface IRequest {
  text: string;
  user_id: string
}

export class CreateMessageService {
  async execute({ text, user_id }: IRequest) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id
      },
      include: {
        user: true
      }
    })

    return message
  }
}