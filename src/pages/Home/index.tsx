import { FindSuperheroById } from 'actions/api/CharacterActions';
import { setSuperhero } from 'actions/redux/superheroAction';
import Content from 'components/molecules/Content';
import Feed from 'components/molecules/Feed';
import Header from 'components/molecules/Header';
import * as React from 'react';
import { useDispatch } from 'react-redux';

const Home: React.FC = () => {
  const dispatch = useDispatch();

  function getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  const initialHeros = React.useCallback(() => {
    Promise.all([
      FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      // TODO: remove when development turns to end
      // FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      // FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      // FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      // FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      // FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
    ])
      .then((response: any) => {
        dispatch(setSuperhero(response));
      })
      .catch((error) => console.log(error));
  }, [dispatch]);

  React.useEffect(() => {
    initialHeros();
  }, [initialHeros]);

  return (
    <Content>
      <Header />
      <Feed />
    </Content>
  );
};

export default Home;
