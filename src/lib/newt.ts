import { NEWT_SPACE_UID } from '@/config/const';
import { env } from '@/config/env';
import { createClient } from 'newt-client-js';

export const newtCDNApi = createClient({
  apiType: 'cdn',
  spaceUid: NEWT_SPACE_UID,
  token: env.NEWT_CDN_API_TOKEN,
});
