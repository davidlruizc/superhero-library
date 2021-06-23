import { useImageError } from 'hooks/image';
import * as React from 'react';
import { Button, ModalBody, ModalFooter } from 'reactstrap';
import { ERROR_IMAGE } from 'utils';
import ProgressBar from '../ProgressBar';
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
  const [setImg, hasError] = useImageError();
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
        {hasError ? (
          <ModalHeroProfile src={ERROR_IMAGE} className="card-img-top" alt={ERROR_IMAGE} />
        ) : (
          <ModalHeroProfile ref={setImg} src={image} className="card-img-top" alt={image} />
        )}
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
          <ProgressBar title="Intelligence" powerstats={powerstats.intelligence} color="green" />
          <ProgressBar title="Strength" powerstats={powerstats.strength} color="red" />
          <ProgressBar title="Speed" powerstats={powerstats.speed} color="yellow" />
          <ProgressBar title="Durability" powerstats={powerstats.durability} color="indigo" />
          <ProgressBar title="Power" powerstats={powerstats.power} color="blue" />
          <ProgressBar title="Combat" powerstats={powerstats.combat} color="orange" />
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
