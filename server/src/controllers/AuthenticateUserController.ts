import { Request, Response } from 'express'

import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { code } = request.body

    const authenticateUser = new AuthenticateUserService()

    try {
      const result = await authenticateUser.execute(code)

      return response.json(result)
    } catch (err) {
      return response.json({ error: err.message })
    }
  }
}