import * as React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Col, Row } from 'reactstrap';

/**
 * SkeletonList es un componente UI que muestra una lista de ejemplo como Loading mientras se realiza la petición del servicio.
 *
 * Uso:
 * ```js
 * <SkeletonList />
 * ```
 */
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
