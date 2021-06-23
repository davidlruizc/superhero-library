import { baseURL } from 'actions/URLs';
import { HttpRequest } from './HttpRequest';

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
        work: request.data.work,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};
