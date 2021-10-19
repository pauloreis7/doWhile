import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction
  ) {
  const { authorization } = request.headers

  if (!authorization) {
    return response
      .status(401)
      .json({ error: true, errorCode: 'token.invalid', message: 'Token not present.' })
  }

  const [, token] = authorization?.split(' ')

  if (!token) {
    return response 
      .status(401)
      .json({ error: true, errorCode: 'token.invalid', message: 'Token not present.' })
  }

  try {
    const { sub } = verify(token as string, process.env.JWT_SECRET) as IPayload

    request.user_id = sub

    return next()
  } catch (err) {
    return response 
      .status(401)
      .json({  error: true, errorCode: 'token.expired', message: 'Token invalid.' })
  }
}