import CardHero from 'components/atoms/Card';
import * as React from 'react';
import { Col, Row } from 'reactstrap';
import { FeedContainer } from './styles';

const Feed: React.FC = () => {
  return (
    <FeedContainer>
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
