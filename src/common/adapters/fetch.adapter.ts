import { Injectable, Logger } from '@nestjs/common';
import { HttpAdapter } from 'src/common/interfaces/http-adapter.interface';

@Injectable()
export class FetchAdapter implements HttpAdapter {
  private readonly logger = new Logger('FetchAdapter');

  get<T>(url: string, options?: Record<any, any>): Promise<T> {
    try {
      return fetch(url, options).then((res) => res.json() as T);
    } catch (error) {
      this.logger.log(error.message || `Fetch error when fetching ${url}`);
      throw error;
    }
  }
}
