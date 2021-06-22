import { ON_PRIMARY_COLOR, PRIMARY_COLOR } from 'assets/styles/colors';
import { Button } from 'reactstrap';
import styled, { css } from 'styled-components';

export const CustomButton = styled(Button)`
  background-color: ${PRIMARY_COLOR};
  color: ${ON_PRIMARY_COLOR};
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const IconWrapper = styled.div`
  margin: 10px;
`;

export const ButtonText = styled.span<{ icon?: string }>`
  align-self: center;

  ${(props) =>
    props.icon &&
    css`
      margin-right: 10px;
    `}
`;
