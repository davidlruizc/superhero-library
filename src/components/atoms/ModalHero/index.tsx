import * as React from 'react';
import { Button, ModalBody, ModalFooter, Progress } from 'reactstrap';
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
  name: string;
  image: string;
  appearance: IAppearance;
  powerstats: IPowerstats;
}

const ModalHero: React.FC<ModalHeroProps> = ({
  modal,
  toggle,
  appearance,
  name,
  powerstats,
  image,
}) => {
  const genderDefinition = React.useMemo(() => {
    if (appearance.gender === '-' || appearance.gender === 'null') {
      return 'unknown';
    }
    return appearance.gender;
  }, [appearance]);

  const raceDefinition = React.useMemo(() => {
    if (appearance.race === '-' || appearance.race === 'null') {
      return 'unknown';
    }
    return appearance.race;
  }, [appearance]);

  const heightDefinition = React.useMemo(() => {
    if (appearance.height[0] === '-' || appearance.height[0] === 'null') {
      return 'Height unknown';
    }
    return appearance.height[0];
  }, [appearance]);

  const weightDefinition = React.useMemo(() => {
    if (appearance.weight[0] === '- lb' || appearance.weight[0] === 'null') {
      return 'Weight unknown';
    }
    return appearance.weight[0];
  }, [appearance]);

  const eyeColorDefinition = React.useMemo(() => {
    if (appearance['eye-color'] === '-' || appearance['eye-color'] === 'null') {
      return 'unknown';
    }
    return appearance['eye-color'];
  }, [appearance]);

  const hairColorDefinition = React.useMemo(() => {
    if (appearance['hair-color'] === '-' || appearance['hair-color'] === 'null') {
      return 'unknown';
    }
    return appearance['hair-color'];
  }, [appearance]);

  return (
    <ModalHeroContainer isOpen={modal} toggle={toggle}>
      <ModalHeroHeader toggle={toggle}>Details about this superhero</ModalHeroHeader>
      <ModalBody>
        <ModalHeroProfile src={image} className="card-img-top" alt={image} />
        <HeroTitle>{name}</HeroTitle>
        <SubTitle>Appearance:</SubTitle>
        <HeroItem>
          <HeroItemMain>Gender: </HeroItemMain>
          {genderDefinition}
        </HeroItem>
        <HeroItem>
          <HeroItemMain>Race: </HeroItemMain>
          {raceDefinition}
        </HeroItem>
        <HeroItem>
          <HeroItemMain>Height: </HeroItemMain>
          {heightDefinition}
        </HeroItem>
        <HeroItem>
          <HeroItemMain>Weight: </HeroItemMain>
          {weightDefinition}
        </HeroItem>
        <HeroItem>
          <HeroItemMain>Eye Color: </HeroItemMain>
          {eyeColorDefinition}
        </HeroItem>
        <HeroItem>
          <HeroItemMain>Hair Color: </HeroItemMain>
          {hairColorDefinition}
        </HeroItem>
        <SubTitle>Powerstats:</SubTitle>
        <div>
          <div className="text-left">Intelligence</div>
          <Progress
            value={powerstats.intelligence}
            color="green"
            animated={true}
            style={{ height: 20 }}
          >
            {powerstats.intelligence}%
          </Progress>
          <div className="text-left">Strength</div>
          <Progress value={powerstats.strength} color="red" animated={true} style={{ height: 20 }}>
            {powerstats.strength}%
          </Progress>
          <div className="text-left">Speed</div>
          <Progress value={powerstats.speed} color="yellow" animated={true} style={{ height: 20 }}>
            {powerstats.speed}%
          </Progress>
          <div className="text-left">Durability</div>
          <Progress
            value={powerstats.durability}
            color="indigo"
            animated={true}
            style={{ height: 20 }}
          >
            {powerstats.durability}%
          </Progress>
          <div className="text-left">Power</div>
          <Progress value={powerstats.power} color="blue" animated={true} style={{ height: 20 }}>
            {powerstats.power}%
          </Progress>
          <div className="text-left">Combat</div>
          <Progress value={powerstats.combat} color="orange" animated={true} style={{ height: 20 }}>
            {powerstats.combat}%
          </Progress>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </ModalHeroContainer>
  );
};

export default ModalHero;
