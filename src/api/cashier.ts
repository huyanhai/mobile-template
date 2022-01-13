import { request } from '@/plugins/axios';

export function queryPayInfo(data: { txn_no: string }) {
  return request.get('/cashier/sessions', {
    params: data,
  });
}

export function sendSmsV2(data: { phone_number: string; country_code: string; sms_type: string }) {
  return request.post('/cashier/sms_v2', data);
}
