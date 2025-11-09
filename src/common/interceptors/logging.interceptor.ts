import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('HTTP');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body, query, params } = request;
    const now = Date.now();

    this.logger.log(`${method} ${url} - Request started`);

    if (Object.keys(body || {}).length > 0) {
      this.logger.debug(`Body: ${JSON.stringify(body)}`);
    }
    if (Object.keys(query || {}).length > 0) {
      this.logger.debug(`Query: ${JSON.stringify(query)}`);
    }
    if (Object.keys(params || {}).length > 0) {
      this.logger.debug(`Params: ${JSON.stringify(params)}`);
    }

    return next.handle().pipe(
      tap({
        next: (data) => {
          const response = context.switchToHttp().getResponse();
          const { statusCode } = response;
          const delay = Date.now() - now;
          this.logger.log(
            `${method} ${url} ${statusCode} - ${delay}ms - Request completed`,
          );
        },
        error: (error) => {
          const delay = Date.now() - now;
          this.logger.error(
            `${method} ${url} - ${delay}ms - Request failed: ${error.message}`,
          );
        },
      }),
    );
  }
}

