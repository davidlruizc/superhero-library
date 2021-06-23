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

interface SearchBarForm {
  searchText: string;
}

const Header: React.FC = () => {
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
    console.log(data);
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
