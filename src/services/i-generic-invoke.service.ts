import { IGenericInvoke } from "../models/i-generic-invoke.model";

export interface IGenericInvokeService {
  invoke(request: IGenericInvoke): Promise<any>;
}
