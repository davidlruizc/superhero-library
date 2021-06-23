import { ON_BACKGROUND_COLOR } from 'assets/styles/colors';
import styled from 'styled-components';
import { device } from 'utils/responsiveTemplate';

export const Title = styled.h3`
  font-size: 35px;
  color: ${ON_BACKGROUND_COLOR};
  align-self: center;
`;

export const Text = styled.p`
  color: ${ON_BACKGROUND_COLOR};
  align-self: center;
  margin-bottom: 0;

  @media ${device.mobile} {
    display: none;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 20px;
`;
