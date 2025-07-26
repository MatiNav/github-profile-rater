export interface HttpAdapter {
  get<T>(url: string, options?: Record<any, any>): Promise<T>;
}
