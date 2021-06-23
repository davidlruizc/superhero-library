declare interface IHttpResponse<T> {
  okay: boolean;
  message: string;
  data: T | null;
  error: any;
}
