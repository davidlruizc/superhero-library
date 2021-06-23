import { Label, Modal, ModalHeader } from 'reactstrap';
import styled from 'styled-components';

export const ModalHeroContainer = styled(Modal)``;

export const ModalHeroHeader = styled(ModalHeader)``;

export const ModalHeroProfile = styled.img`
  height: 250px;
  object-fit: cover;
  margin-bottom: 20px;
`;

export const HeroTitle = styled(Label)`
  font-size: 30px;
  font-weight: bold;
  width: 100%;
`;

export const SubTitle = styled(Label)`
  font-size: 25px;
  font-weight: bold;
  width: 100%;
  text-decoration: underline;
`;

export const HeroItem = styled(Label)`
  font-size: 15px !important;
  width: 100%;
`;

export const HeroItemMain = styled.span`
  font-weight: bold;
`;
