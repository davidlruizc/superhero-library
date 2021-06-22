import { ON_PRIMARY_COLOR, PRIMARY_COLOR } from 'assets/styles/colors';
import { Button } from 'reactstrap';
import styled from 'styled-components';

export const CustomButton = styled(Button)`
  background-color: ${PRIMARY_COLOR};
  color: ${ON_PRIMARY_COLOR};
`;
