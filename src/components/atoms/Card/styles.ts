import { BACKGROUND_CARD, ON_BACKGROUND_COLOR } from 'assets/styles/colors';
import { Card, CardText, CardTitle } from 'reactstrap';
import styled from 'styled-components';

export const CardContainer = styled(Card)`
  margin-top: 15px;
  margin-bottom: 15px;
  background-color: ${BACKGROUND_CARD};
`;

export const HeroImage = styled.img`
  height: 330px;
  object-fit: cover;
`;

export const HeroTitle = styled(CardTitle)`
  color: ${ON_BACKGROUND_COLOR};
  font-weight: bold;
`;

export const HeroText = styled(CardText)`
  color: ${ON_BACKGROUND_COLOR};
`;
