import * as React from 'react';
import {
  CardSearch,
  HeaderContainer,
  ImageHeader,
  SearchIcon,
  SearchIconAnchor,
  SearchInput,
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
        <div className="d-flex justify-content-center px-5">
          <SearchWrapper>
            <SearchInput type="text" placeholder="Search..." name="" />
            <SearchIconAnchor>
              <SearchIcon className="fa fa-search" />
            </SearchIconAnchor>
          </SearchWrapper>
        </div>
      </CardSearch>
    </HeaderContainer>
  );
};

export default Header;
