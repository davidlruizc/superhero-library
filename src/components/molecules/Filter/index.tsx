import ButtonStyled from 'components/atoms/ButtonStyled';
import * as React from 'react';
import { Col, Collapse, Row } from 'reactstrap';
import { MainWrapper, Title, Text } from './styles';

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <MainWrapper>
        <Title>Filter</Title>
        <Text>Organize your favorite characters as you wish</Text>
        <ButtonStyled onClick={toggle} text="Filters" icon="fa fa-filter" />
      </MainWrapper>
      <Collapse isOpen={isOpen}>
        <MainWrapper>
          <Row>
            <Col sm="6">
              <select className="form-control">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
            <Col sm="6">
              <select className="form-control ">
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Col>
          </Row>
        </MainWrapper>
      </Collapse>
    </div>
  );
};

export default Filter;
