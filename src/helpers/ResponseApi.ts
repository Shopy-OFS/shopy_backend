import { Response } from 'express';

const sendSuccess = (response: Response, message: string | null, data: any) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  response.send({
    message,
    ...data,
  });

const sendError = (response: Response, httpCode: number, message: string | null, error: any) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  response.status(httpCode).send({
    message,
    ...error,
  });

export { sendSuccess, sendError };
