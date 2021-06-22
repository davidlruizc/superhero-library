import { baseURL, superheroURLs } from 'actions/URLs';
import { HttpRequest } from './HttpRequest';

export const Powerstats = async () => {
  try {
    //TODO: Get interface response
    const request = await new HttpRequest().Get<any>(`${baseURL}/id${superheroURLs.powerstats}`);
    if (request.okay && request.data !== null) {
      return request.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const Appearance = async () => {
  try {
    //TODO: Get interface response
    const request = await new HttpRequest().Get<any>(`${baseURL}/id${superheroURLs.appearance}`);
    if (request.okay && request.data !== null) {
      return request.data;
    }
  } catch (error) {
    throw new Error(error);
  }
};
