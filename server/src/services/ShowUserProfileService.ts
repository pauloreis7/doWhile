import prismaClient from "../prisma"

export class ShowUserProfileService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id
      }
    })

    return user
  } 
}