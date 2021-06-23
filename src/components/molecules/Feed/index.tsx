import CardHero from 'components/atoms/Card';
import SkeletonList from 'components/atoms/Skeleton';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { RootState } from 'states';
import { FeedContainer } from './styles';

/**
 * Feed se encarga de renderear la lista de heroes almacenadas en el reducer `superheroReducer`
 *
 * Uso:
 * ```js
 * <Feed />
 * ```
 */
const Feed: React.FC = () => {
  const hero = useSelector((state: RootState) => state.superheroReducer);

  return (
    <FeedContainer>
      {hero.response ? (
        <Row>
          {hero.response.map((superhero) => (
            <Col sm="4" key={superhero.id}>
              <CardHero
                image={superhero.image.url}
                name={superhero.name}
                work={superhero.work.occupation}
                appearance={superhero.appearance}
                powerstats={superhero.powerstats}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <SkeletonList />
      )}
    </FeedContainer>
  );
};

export default Feed;
