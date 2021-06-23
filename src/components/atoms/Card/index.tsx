import * as React from 'react';
import { CardBody } from 'reactstrap';
import ButtonStyled from '../ButtonStyled';
import ModalHero from '../ModalHero';
import { CardContainer, HeroImage, HeroText, HeroTitle } from './styles';

interface CardHeroProps {
  image: string;
  name: string;
  work: string;
  appearance: IAppearance;
  powerstats: IPowerstats;
}

const CardHero: React.FC<CardHeroProps> = ({ image, name, work, appearance, powerstats }) => {
  const [modal, setModal] = React.useState(false);

  const toggle = () => setModal(!modal);

  const workHero = React.useMemo(() => {
    if (work === '-' || work === 'null') {
      return 'Occupation: Not identified';
    }
    return `Occupation: ${work}`;
  }, [work]);

  return (
    <CardContainer>
      <div>
        <HeroImage src={image} className="card-img-top" alt={image} />
      </div>
      <CardBody>
        <HeroTitle>{name}</HeroTitle>
        <HeroText>{workHero}</HeroText>
        <ButtonStyled text="Load more..." onClick={toggle} />
      </CardBody>
      <ModalHero
        modal={modal}
        toggle={toggle}
        name={name}
        appearance={appearance}
        powerstats={powerstats}
        image={image}
      />
    </CardContainer>
  );
};

export default CardHero;
