import { Router, Request, Response } from 'express'

import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'
import { GetLast3MessagesController } from './controllers/GetLast3MessagesController'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const authenticateUserController = new AuthenticateUserController()
const createMessageController = new CreateMessageController()
const getLast3MessagesController = new GetLast3MessagesController()

const router = Router()

router.get('/github', (request: Request, response: Response) => {
  response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`
  )
})

router.get('/signin/callback', (request: Request, response: Response) => {
  const { code } = request.query

  return response.json(code)
})

router.post('/authenticate', authenticateUserController.handle)

router.post(
  '/messages', 
  ensureAuthenticated, 
  createMessageController.handle
)

router.get('/messages/last3', getLast3MessagesController.handle)

export { router }