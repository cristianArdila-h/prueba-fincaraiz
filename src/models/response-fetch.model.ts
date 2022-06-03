export class ResponseFetchModel<T> {
  public data: T;
  public status: number;
  public code: string;

  constructor(data: T, status: number, code: string) {
    this.data = data;
    this.status = status;
    this.code = code;
  }
}
