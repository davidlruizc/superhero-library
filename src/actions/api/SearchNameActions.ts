import { superheroURLs } from 'actions/URLs';
import { HttpRequest } from './HttpRequest';

export const SearchName = async (name: string): Promise<ISearchResponseAPI | undefined> => {
  try {
    const request = await new HttpRequest().Get<ISearchName>(`${superheroURLs.searchName}${name}`);
    if (request.okay && request.message === 'error') {
      return {
        ok: false,
        error: request.error,
      };
    }

    if (request.okay && request.data !== null) {
      return {
        ok: true,
        data: request.data,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
