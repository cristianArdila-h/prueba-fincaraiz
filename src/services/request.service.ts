import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { IServiceParams } from '../models/i-service-params.model';
import { ResponseFetchModel } from '../models/response-fetch.model';

const TIMEOUT_MILLISECONDS = 10 * 1000;

export class RequestService {
  public get = async <T>(
    params: IServiceParams
  ): Promise<ResponseFetchModel<T>> => {
    const options = RequestService.getAxiosRequestConfig(
      params
    ) as IServiceParams;
    const api = axios.create({ ...options });
    return api
      .get(`${params.url}`, options)
      .then(async (r: AxiosResponse) => {
        return new ResponseFetchModel(r.data as T, r.status, 'OK');
      })
      .catch((err: any) => {
        return Promise.reject(err.response.data);
      });
  }

  public post = async <T>(
    params: IServiceParams
  ): Promise<ResponseFetchModel<T>> => {
    const options = RequestService.getAxiosRequestConfig(
      params
    ) as IServiceParams;
    const api = axios.create({ ...options });
    return api
      .post(`${params.url}`, params.body || {}, options)
      .then(async (r: AxiosResponse) => {
        return new ResponseFetchModel(r.data as T, r.status, 'OK');
      })
      .catch((err: any) => {
        return Promise.reject(err.response);
      });
  }

  private static getAxiosRequestConfig(params: any): AxiosRequestConfig {
    return {
      headers: {
        'Content-Type': 'application/json',
        ...params.headers,
      },
      params: params.queryParams,
      timeout: TIMEOUT_MILLISECONDS,
    };
  }
}
