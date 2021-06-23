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
      {console.log(hero)}
      <Row>
        <Col sm="4">
          <CardHero />
        </Col>
        <Col sm="4">
          <CardHero />
        </Col>
        <Col sm="4">
          <CardHero />
        </Col>

        <Col sm="4">
          <CardHero />
        </Col>
        <Col sm="4">
          <CardHero />
        </Col>
      </Row>
    </FeedContainer>
  );
};

export default Feed;
