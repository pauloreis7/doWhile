import { Router, Request, Response } from 'express'

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

export { router }