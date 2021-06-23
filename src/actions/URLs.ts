import { REACT_APP_ACCESS_TOKEN, REACT_APP_API, REACT_APP_PROXY } from 'utils/environment';

// temporary use a proxy to pass the CORS
export const baseURL = `${REACT_APP_PROXY}${REACT_APP_API}${REACT_APP_ACCESS_TOKEN}`;

export const superheroURLs = {
  searchName: `${baseURL}/search/`,
};
