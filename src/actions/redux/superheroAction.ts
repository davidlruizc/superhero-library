import { ISetSuperhero, SET_SUPERHERO } from 'states/reducers/superhero.reducer';

/**
 * Redux action para almacenar los datos de todos los heroes por busquedas
 *
 * @param {ISuperHero[]} superheros  * @returns ISetSuperhero
 */
export const setSuperhero = (superheros: ISuperHero[]): ISetSuperhero => ({
  type: SET_SUPERHERO,
  payload: superheros,
});
