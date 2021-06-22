import * as React from 'react';
import { CardBody } from 'reactstrap';
import ButtonStyled from '../ButtonStyled';
import { CardContainer, HeroImage, HeroText, HeroTitle } from './styles';

const CardHero: React.FC = () => {
  return (
    <CardContainer>
      <div>
        <HeroImage
          src="https://www.superherodb.com/pictures2/portraits/10/100/626.jpg"
          className="card-img-top"
          alt="..."
        />
      </div>
      <CardBody>
        <HeroTitle>Special title treatment</HeroTitle>
        <HeroText>With supporting text below as a natural lead-in to additional content.</HeroText>
        <ButtonStyled text="Load more..." />
      </CardBody>
    </CardContainer>
  );
};

export default CardHero;
