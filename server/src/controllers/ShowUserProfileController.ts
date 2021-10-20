import { Request, Response } from 'express'

import { ShowUserProfileService } from "../services/ShowUserProfileService";

export class ShowUserProfileController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id } = request

    const showUserProfile = new ShowUserProfileService()

    try {
      const result = await showUserProfile.execute(user_id)

      return response.json(result)
    } catch (err) {
      return response.json({ error: err.message })
    }
  }
}