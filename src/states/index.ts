import { combineReducers } from 'redux';
import superheroReducer from './reducers/superhero.reducer';

const rootReducer = combineReducers({
  superheroReducer: superheroReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
