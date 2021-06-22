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
  font-size: 28px;
  font-weight: bold;
  width: 100%;
`;

export const SubTitle = styled(Label)`
  font-size: 18px;
  font-weight: bold;
  width: 100%;
  text-decoration: underline;
`;

export const HeroItem = styled(Label)`
  font: 14px;
  width: 100%;
`;

export const HeroItemMain = styled.span`
  font-weight: bold;
`;
