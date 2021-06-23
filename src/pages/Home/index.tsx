import { FindSuperheroById } from 'actions/api/CharacterActions';
import { setSuperhero } from 'actions/redux/superheroAction';
import Content from 'components/molecules/Content';
import Feed from 'components/molecules/Feed';
import Header from 'components/molecules/Header';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

/**
 * Componente Home padre y pantalla inicial de la SPA.
 * Se encarga de listar los superheroes iniciales sin ningún dato de busqueda previamente usado.
 *
 * Uso:
 * ```html
 * <Home />
 * ```
 */
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const toast = useToasts();

  function getRandomArbitrary(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  const initialHeros = React.useCallback(() => {
    Promise.all([
      FindSuperheroById(`${getRandomArbitrary(1, 731)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 731)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 731)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 731)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 731)}`),
      FindSuperheroById(`${getRandomArbitrary(1, 731)}`),
    ])
      .then((response: any) => {
        response.sort((a: any, b: any) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });

        dispatch(setSuperhero(response));
      })
      .catch((error) => {
        toast.addToast(error.message, {
          appearance: 'error',
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
