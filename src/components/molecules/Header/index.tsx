import * as React from 'react';
import {
  CardSearch,
  HeaderContainer,
  ImageHeader,
  SearchIcon,
  SearchIconAnchor,
  SearchInput,
  SearchMain,
  SearchWrapper,
  TitleHeader,
} from './styles';
import ComicImage from 'assets/images/comic.svg';
import Filter from '../Filter';
import { useForm, Controller } from 'react-hook-form';
import { useToasts } from 'react-toast-notifications';
import { SearchName } from 'actions/api/SearchNameActions';
import { useDispatch, useSelector } from 'react-redux';
import { setSuperhero } from 'actions/redux/superheroAction';
import { RootState } from 'states';
import { sortAppearance, sortPowerstats } from 'utils/index';

interface SearchBarForm {
  searchText: string;
}

/**
 * Header se encarga de mostar la cabecera de la aplicación que contiene:
 * - Barra de busqueda
 * - Filtros por apariencia y habilidades
 *
 * Dentro del componente este realiza las busquedas respectivas y retorna la respuesta de la API almacenando el contenido dentro del estado de Redux
 *
 * Uso:
 * ```html
 * <Header />
 * ```
 */
const Header: React.FC = () => {
  const toast = useToasts();
  const dispatch = useDispatch();
  const hero = useSelector((state: RootState) => state.superheroReducer);

  const defaultValues: SearchBarForm = {
    searchText: '',
  };
  const getDefaultFormValues = (): SearchBarForm => {
    return defaultValues;
  };

  const { control, handleSubmit } = useForm<SearchBarForm>({
    reValidateMode: 'onBlur',
    defaultValues: getDefaultFormValues(),
  });

  const submitSearch = (data: SearchBarForm) => {
    if (data.searchText !== '') {
      SearchName(data.searchText)
        .then((heroFound) => {
          if (heroFound) {
            if (heroFound.ok) {
              if (heroFound.data) {
                dispatch(setSuperhero(heroFound.data));
              }
            } else {
              toast.addToast(heroFound?.error, {
                appearance: 'error',
              });
            }
          }
        })
        .catch((error) => {
          toast.addToast(error.message, {
            appearance: 'error',
          });
        });
    } else {
      toast.addToast(`Field cannot be empty`, {
        appearance: 'error',
      });
    }
  };

  const orderFilterPowerstats = (powerstat: string) => {
    if (hero.response) {
      hero.response.sort(sortPowerstats(false, powerstat));

      dispatch(setSuperhero(hero.response));
    }
  };

  const orderFilterByAppearance = (appearance: string) => {
    if (hero.response) {
      hero.response.sort(sortAppearance(false, appearance));

      dispatch(setSuperhero(hero.response));
    }
  };

  return (
    <HeaderContainer>
      <ImageHeader src={ComicImage} />
      <TitleHeader>SUPERHERO LIBRARY</TitleHeader>
      <CardSearch className="p-4 ">
        <SearchMain className="d-flex justify-content-center">
          <SearchWrapper>
            <Controller
              control={control}
              name="searchText"
              render={({ field: { onChange, value } }) => (
                <SearchInput
                  type="text"
                  placeholder="Search..."
                  name="searchText"
                  onChange={(value) => onChange(value)}
                  value={value}
                />
              )}
              defaultValue=""
            />
            <SearchIconAnchor onClick={handleSubmit(submitSearch)}>
              <SearchIcon className="fa fa-search" />
            </SearchIconAnchor>
          </SearchWrapper>
        </SearchMain>
      </CardSearch>
      <Filter filterPowerstats={orderFilterPowerstats} filterAppearance={orderFilterByAppearance} />
    </HeaderContainer>
  );
};

export default Header;
