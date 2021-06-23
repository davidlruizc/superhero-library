import ButtonStyled from 'components/atoms/ButtonStyled';
import MultiSelect from 'components/atoms/MultiSelect';
import Option from 'components/atoms/MultiSelect/Option';
import * as React from 'react';
import { Col, Collapse, Row } from 'reactstrap';
import { MainWrapper, Title, Text, ButtonWrapper } from './styles';

interface FilterProps {
  filterPowerstats: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filterPowerstats }) => {
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
            <Col sm="4">
              <MultiSelect
                label="Order by powerstats"
                onChange={(value) => filterPowerstats(value.target.value)}
              >
                <Option selected>Open this select powerstats</Option>
                <Option value="intelligence">Intelligence</Option>
                <Option value="strength">Strength</Option>
                <Option value="speed">Speed</Option>
                <Option value="durability">Durability</Option>
                <Option value="power">Power</Option>
                <Option value="combat">Combat</Option>
              </MultiSelect>
            </Col>
            <Col sm="4">
              <MultiSelect label="Order by appearance">
                <Option selected>Open this select appereance</Option>
                <Option value="1">Gender</Option>
                <Option value="2">Race</Option>
                <Option value="3">Height</Option>
                <Option value="4">Weight</Option>
                <Option value="5">Eye Color</Option>
                <Option value="6">Hair Color</Option>
              </MultiSelect>
            </Col>
            <ButtonWrapper sm="4">
              <ButtonStyled text="Clear" statusColor="danger" />
            </ButtonWrapper>
          </Row>
        </MainWrapper>
      </Collapse>
    </div>
  );
};

export default Filter;
