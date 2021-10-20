import { Request, Response } from 'express'

import { GetLast3MessagesService } from "../services/GetLast3MessagesService";

export class GetLast3MessagesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const getLast3Messages = new GetLast3MessagesService()

    try {
      const result = await getLast3Messages.execute()

      return response.json(result)
    } catch (err) {
      return response.json({ error: err.message })
    }
  }
}