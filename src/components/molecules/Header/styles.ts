import { BACKGROUND_CARD, ON_BACKGROUND_COLOR, SECONDARY_COLOR } from 'assets/styles/colors';
import { Card, Container } from 'reactstrap';
import styled from 'styled-components';
import { device } from 'utils/responsiveTemplate';

export const HeaderContainer = styled(Container)`
  text-align: center;
  padding-top: 40px;
`;

export const ImageHeader = styled.img`
  width: 300px;
  margin: 20px;
`;

export const TitleHeader = styled.h1`
  color: ${ON_BACKGROUND_COLOR};
  font-size: 40px;
  margin: 20px;
`;

export const CardSearch = styled(Card)`
  background-color: ${BACKGROUND_CARD};
`;

export const SearchMain = styled.div`
  padding-left: 3rem !important;

  @media ${device.mobile} {
    padding-left: 0 !important;
  }
`;

export const SearchWrapper = styled.div`
  width: 100%;
  margin-bottom: auto;
  height: 50px;
  background-color: ${BACKGROUND_CARD};
  padding: 10px;
  border-radius: 5px;
`;

export const SearchInput = styled.input`
  color: white;
  border: 0;
  outline: 0;
  background: none;
  width: 0;
  margin-top: 5px;
  caret-color: transparent;
  line-height: 20px;
  transition: width 0.4s linear;

  padding: 0 10px;
  width: 100%;
  caret-color: ${SECONDARY_COLOR};
  font-size: 19px;
  font-weight: 300;
  color: ${ON_BACKGROUND_COLOR};
  transition: width 0.4s linear;
`;

export const SearchIconAnchor = styled.a`
  height: 34px;
  width: 34px;
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${SECONDARY_COLOR};
  font-size: 10px;
  bottom: 30px;
  position: relative;
  border-radius: 5px;
  cursor: pointer;
`;

export const SearchIcon = styled.i`
  background-color: 'white' !important;
`;
