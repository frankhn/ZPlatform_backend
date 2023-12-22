import express, { Response, Request } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';
import authController from '../controllers/auth.controller';
import * as validations from './validations/auth.validations';
import CustomError from '../helpers/CustomError';
import { HTTP_BAD_REQUEST, HTTP_CREATED, HTTP_SERVER_ERROR } from '../constants/httpStatusCodes';
import { generateToken } from '../helpers';

const router = express.Router();

router.post(
  '/auth/signup',
  validations.signupValidator,
  async (req: Request, res: Response) => {
    try {
      const user = await authController.createUser(req.body);
      console.log(user, "USER")
      return res
        .status(HTTP_CREATED)
        .json({
          token: await generateToken({ ref: user.id }),
        });
    } catch (error) {
      console.log(error, "SOMETH")
      if (error instanceof CustomError) {
        return res.status(HTTP_BAD_REQUEST).json({ error: error.message });
      }
      return res.status(HTTP_SERVER_ERROR).json({ error: '' });
    }
  },
);

router.post(
  '/auth/login',
  validations.loginValidator,
  async (req: Request, res: Response) => {
    try {
      const { success, accessToken, user, message } = await authController.loginUser(
        req.body,
      );
      return res.status(HTTP_CREATED).json({
        success,
        accessToken,
        user,
        message,
      });
    } catch (error) {
      if (error instanceof CustomError) {
        return res.status(HTTP_BAD_REQUEST).json({ error: error.message });
      }
      return res.status(HTTP_SERVER_ERROR).json({ error: '' });
    }
  },
);

router.put('/auth/verify-account/:token', async (req: Request, res: Response) => {
  try {
    const { token } = req.params;
    const result = await authController.verifyEmail(token as string);
    return res.json({ message: 'Account verified', data: result });
  } catch (error) {
    if (error instanceof CustomError || error instanceof JsonWebTokenError) {
      return res.status(HTTP_BAD_REQUEST).json({ error: error.message });
    }
    return res.status(HTTP_SERVER_ERROR).json({ error: '' });
  }
});

router.post(
  '/auth/forgot-password',
  validations.emailValidator,
  async (req: Request, res: Response) => {
    try {
      const result = await authController.forgotPassword(req.body);
      return res.json({ data: result });
    } catch (error) {
      if (error instanceof CustomError || error instanceof JsonWebTokenError) {
        return res.status(HTTP_BAD_REQUEST).json({ error: error.message });
      }
      return res.status(HTTP_SERVER_ERROR).json(error);
    }
  },
);

router.post(
  '/auth/reset-password/:token',
  validations.resetPasswordValidator,
  async (req: Request, res: Response) => {
    try {
      const { token } = req.params;
      const result = await authController.resetPassword(token, req.body);
      return res.json({ data: result });
    } catch (error) {
      if (error instanceof CustomError || error instanceof JsonWebTokenError) {
        return res.status(HTTP_BAD_REQUEST).json({ error: error.message });
      }
      return res.status(HTTP_SERVER_ERROR).json({ error: '' });
    }
  },
);

export default router;
