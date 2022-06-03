export interface IServiceParams {
  url: string;
  body?: any;
  queryParams?: { [key: string]: string };
  headers?: any[];
}
