import { envsafe, str } from 'envsafe';

export const env = envsafe({
  NEWT_CDN_API_TOKEN: str(),
});
