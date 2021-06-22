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

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <ImageHeader src={ComicImage} />
      <TitleHeader>SUPERHERO LIBRARY</TitleHeader>
      <CardSearch className="p-4 ">
        <SearchMain className="d-flex justify-content-center">
          <SearchWrapper>
            <SearchInput type="text" placeholder="Search..." name="" />
            <SearchIconAnchor>
              <SearchIcon className="fa fa-search" />
            </SearchIconAnchor>
          </SearchWrapper>
        </SearchMain>
      </CardSearch>
    </HeaderContainer>
  );
};

export default Header;
