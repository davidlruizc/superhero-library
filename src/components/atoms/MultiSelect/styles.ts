import { BACKGROUND_CARD, ON_BACKGROUND_COLOR } from 'assets/styles/colors';
import { Input, Label } from 'reactstrap';
import styled from 'styled-components';

export const SelectLabel = styled(Label)`
  color: ${ON_BACKGROUND_COLOR};
`;

export const SelectInput = styled(Input)`
  background-color: ${BACKGROUND_CARD};
  color: ${ON_BACKGROUND_COLOR};
`;
