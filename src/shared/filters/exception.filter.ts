import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    const responseBody = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error:
        exception instanceof HttpException
          ? exception.getResponse()
          : 'Internal server error',
    };

    response.status(status).json(responseBody);
  }
}
