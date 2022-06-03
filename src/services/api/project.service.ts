import CONFIG from '../../config';
import { IGenericInvoke } from '../../models/i-generic-invoke.model';
import { ResponseFetchModel } from '../../models/response-fetch.model';
import { IGenericInvokeService } from '../i-generic-invoke.service';
import { RequestService } from '../request.service';

export class ProjectService implements IGenericInvokeService {
    public async invoke(
        request: IGenericInvoke
    ): Promise<ResponseFetchModel<any>> {
        try {
            const headers = new Array();
            headers.push({ 'X-fake-key': '7023a0cb-e1ac-48dc-a226-cfb788aab301' });
            const url = `https://run.mocky.io/v3/74f1d827-7aa3-431d-8af8-f922480cffe6`;

            const REQUEST_SERVICE = new RequestService();
            return await REQUEST_SERVICE.get({
                headers,
                url,
                body: {},
            });
        } catch (error) {
            console.warn('error obteniendo data del proyecto', error);
            return {
                data: error,
                status: 500,
                code: 'error'
            };
        }
    }
} 