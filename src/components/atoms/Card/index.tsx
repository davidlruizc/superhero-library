import { useImageError } from 'hooks/image';
import * as React from 'react';
import { CardBody } from 'reactstrap';
import { ERROR_IMAGE } from 'utils';
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

/**
 * CardHero muestra la portada inicial del superheroe: Foto, Nombre, ocupación.
 * En caso de que la imagen no sea cargada muestra una alternativa por defecto.
 * 
 * @param {string} image
 * @param {string} name
 * @param {string} work
 * @typedef {IAppearance} appearance
 * @typedef {IPowerstats} powerstats
 * 
 * Uso:
 * ```js
 * <CardHero
    image={superhero.image.url}
    name={superhero.name}
    work={superhero.work.occupation}
    appearance={superhero.appearance}
    powerstats={superhero.powerstats}
  />
 * ```
 */
const CardHero: React.FC<CardHeroProps> = ({ image, name, work, appearance, powerstats }) => {
  const [modal, setModal] = React.useState(false);

  const [setImg, hasError] = useImageError();

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
        {hasError ? (
          <HeroImage src={ERROR_IMAGE} className="card-img-top" alt={ERROR_IMAGE} />
        ) : (
          <HeroImage ref={setImg} src={image} className="card-img-top" alt={image} />
        )}
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
