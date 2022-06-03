import CONFIG from '../../config';
import { IGenericInvoke } from '../../models/i-generic-invoke.model';
import { ResponseFetchModel } from '../../models/response-fetch.model';
import { IGenericInvokeService } from '../i-generic-invoke.service';
import { RequestService } from '../request.service';

export class ContactUsService implements IGenericInvokeService {
    public async invoke(
        request: IGenericInvoke
    ): Promise<ResponseFetchModel<any>> {
        try {
            const headers = new Array();
            headers.push({ 'X-fake-key': '7023a0cb-e1ac-48dc-a226-cfb788aab301' });
            const url = `https://run.mocky.io/v3/85825967-91ff-4c51-8dec-04d8dc2a593b`;

            const REQUEST_SERVICE = new RequestService();

            return await REQUEST_SERVICE.post({
                headers,
                url,
                body: {},
            });
        } catch (error) {
            console.warn('error enviando informacion del formulario.', error);
            return {
                data: error,
                status: 500,
                code: 'error'
            };
        }
    }
} 