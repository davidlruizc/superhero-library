import { superheroURLs } from 'actions/URLs';
import { HttpRequest } from './HttpRequest';

/**
 * Servicio encargado de retornar la lista de heroes por busqueda de nombre
 *
 * @param {string} name
 * @returns {Promise<ISearchResponseAPI | undefined>} lista de heroes
 */
export const SearchName = async (name: string): Promise<ISearchResponseAPI | undefined> => {
  try {
    const request = await new HttpRequest().Get<ISearchName[]>(
      `${superheroURLs.searchName}${name}`
    );
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
