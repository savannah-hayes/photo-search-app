import { createApi } from 'unsplash-js';

const APP_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
export const unsplash = createApi({ accessKey: APP_ACCESS_KEY });
