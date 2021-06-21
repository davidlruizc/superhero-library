import { superheroURLs } from 'actions/URLs';
import { HttpRequest } from './HttpRequest';

export const SearchName = async (name: string) => {
  try {
    const request = await new HttpRequest().Get<any>(`${superheroURLs.searchName}${name}`);
    if (request.okay && request.data !== null) {
      return request.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
