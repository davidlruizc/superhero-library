import * as React from 'react';
import { Button, ModalBody, ModalFooter } from 'reactstrap';
import {
  HeroItem,
  HeroItemMain,
  HeroTitle,
  ModalHeroContainer,
  ModalHeroHeader,
  ModalHeroProfile,
  SubTitle,
} from './styles';

interface ModalHeroProps {
  modal: boolean;
  toggle: () => void;
}

const ModalHero: React.FC<ModalHeroProps> = ({ modal, toggle }) => {
  return (
    <ModalHeroContainer isOpen={modal} toggle={toggle}>
      <ModalHeroHeader toggle={toggle}>Details about this superhero</ModalHeroHeader>
      <ModalBody>
        <ModalHeroProfile
          src="https://www.superherodb.com/pictures2/portraits/10/100/626.jpg"
          className="card-img-top"
          alt="..."
        />
        <HeroTitle>Superman</HeroTitle>
        <SubTitle>Appearance:</SubTitle>
        <HeroItem>
          <HeroItemMain>Gender: </HeroItemMain>Embeces
        </HeroItem>
        <HeroItem>
          <HeroItemMain>Gender: </HeroItemMain>Embeces
        </HeroItem>
        <HeroItem>
          <HeroItemMain>Gender: </HeroItemMain>Embeces
        </HeroItem>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </ModalHeroContainer>
  );
};

export default ModalHero;
