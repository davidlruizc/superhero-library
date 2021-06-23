import { FindSuperheroById } from 'actions/api/CharacterActions';
import Content from 'components/molecules/Content';
import Feed from 'components/molecules/Feed';
import Header from 'components/molecules/Header';
import * as React from 'react';

const Home: React.FC = () => {
  function getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  const initialHeros = React.useCallback(() => {
    Promise.all([
      FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 737)}`),
    ])
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

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
