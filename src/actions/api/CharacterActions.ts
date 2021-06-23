import { baseURL, superheroURLs } from 'actions/URLs';
import { HttpRequest } from './HttpRequest';

export const Powerstats = async (id: string): Promise<IPowerstatsResponse | undefined> => {
  try {
    const request = await new HttpRequest().Get<IPowerstatsResponse>(
      `${baseURL}/${id}${superheroURLs.powerstats}`
    );
    if (request.okay && request.data !== null) {
      return request.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const Appearance = async (id: string): Promise<IAppearanceResponse | undefined> => {
  try {
    const request = await new HttpRequest().Get<IAppearanceResponse>(
      `${baseURL}/${id}${superheroURLs.appearance}`
    );
    if (request.okay && request.data !== null) {
      return request.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const FindSuperheroById = async (id: string): Promise<ISuperHero | undefined> => {
  try {
    const request = await new HttpRequest().GetFull<ISearchName>(`${baseURL}/${id}`);
    if (request.okay && request.data !== null) {
      return {
        id: request.data.id,
        appearance: request.data.appearance,
        image: request.data.image,
        name: request.data.name,
        powerstats: request.data.powerstats,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
