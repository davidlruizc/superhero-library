import * as React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Col, Row } from 'reactstrap';

const SkeletonList: React.FC = () => {
  return (
    <SkeletonTheme color="#202020" highlightColor="#444">
      <Row>
        <Col sm="4">
          <Skeleton height={400} style={{ marginBottom: 10 }} />
        </Col>
        <Col sm="4">
          <Skeleton height={400} style={{ marginBottom: 10 }} />
        </Col>
        <Col sm="4">
          <Skeleton height={400} style={{ marginBottom: 10 }} />
        </Col>
      </Row>
    </SkeletonTheme>
  );
};

export default SkeletonList;
