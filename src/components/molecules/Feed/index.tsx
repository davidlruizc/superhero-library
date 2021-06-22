import * as React from 'react';
import { Card, Col, Container, Row, CardBody } from 'reactstrap';
import { FeedContainer } from './styles';

const Feed: React.FC = () => {
  return (
    <FeedContainer>
      <Row>
        <Col sm="4">
          <Card>
            <CardBody>
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </Col>
        <Col sm="4">
          <Card>
            <CardBody>
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </FeedContainer>
  );
};

export default Feed;
