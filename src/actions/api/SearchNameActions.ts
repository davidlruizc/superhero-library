import { superheroURLs } from 'actions/URLs';
import { HttpRequest } from './HttpRequest';

export const SearchName = async (name: string): Promise<ISearchName | undefined> => {
  try {
    const request = await new HttpRequest().Get<ISearchName>(`${superheroURLs.searchName}${name}`);
    if (request.okay && request.data !== null) {
      return request.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
