import CardHero from 'components/atoms/Card';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import { RootState } from 'states';
import { FeedContainer } from './styles';

const Feed: React.FC = () => {
  const hero = useSelector((state: RootState) => state.superheroReducer);

  return (
    <FeedContainer>
      {hero.response ? (
        <Row>
          {hero.response.map((superhero) => (
            <React.Fragment>
              <Col sm="4" key={superhero.id}>
                <CardHero
                  image={superhero.image.url}
                  name={superhero.name}
                  work={superhero.work.occupation}
                  appearance={superhero.appearance}
                  powerstats={superhero.powerstats}
                />
              </Col>
            </React.Fragment>
          ))}
        </Row>
      ) : (
        <div>Loading...</div>
      )}
    </FeedContainer>
  );
};

export default Feed;
