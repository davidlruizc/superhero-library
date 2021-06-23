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

interface SearchBarForm {
  searchText: string;
}

const Header: React.FC = () => {
  const toast = useToasts();

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
              // TODO: dispatch state
              console.log(heroFound);
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
      <Filter />
    </HeaderContainer>
  );
};

export default Header;
