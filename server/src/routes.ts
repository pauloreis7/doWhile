import { Router, Request, Response } from 'express'

import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateMessageController } from './controllers/CreateMessageController'

import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const authenticateUserController = new AuthenticateUserController()
const createMessageController = new CreateMessageController()

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

export { router }