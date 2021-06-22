export const SET_SUPERHERO = 'SET_SUPERHERO';

export interface ISetSuperhero {
  type: typeof SET_SUPERHERO;
  payload: ISuperHero[];
}

export const initialState: ISuperheroReducer = { response: null };

export type ISuperheroActionType = ISetSuperhero;

const superheroReducer = (state: ISuperheroReducer, action: ISuperheroActionType) => {
  switch (action.type) {
    case SET_SUPERHERO:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};

export default superheroReducer;
