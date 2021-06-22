import { ISetSuperhero, SET_SUPERHERO } from 'states/reducers/superhero.reducer';

export const setSuperhero = (superheros: ISuperHero[]): ISetSuperhero => ({
  type: SET_SUPERHERO,
  payload: superheros,
});
