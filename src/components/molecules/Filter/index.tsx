import ButtonStyled from 'components/atoms/ButtonStyled';
import MultiSelect from 'components/atoms/MultiSelect';
import Option from 'components/atoms/MultiSelect/Option';
import * as React from 'react';
import { Col, Collapse, Row } from 'reactstrap';
import { MainWrapper, Title, Text } from './styles';

interface FilterProps {
  filterPowerstats: (value: string) => void;
  filterAppearance: (value: string) => void;
}

const Filter: React.FC<FilterProps> = ({ filterPowerstats, filterAppearance }) => {
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
            <Col sm="6">
              <MultiSelect
                label="Order by appearance"
                onChange={(value) => filterAppearance(value.target.value)}
              >
                <Option selected>Open this select appereance</Option>
                <Option value="gender">Gender</Option>
                <Option value="race">Race</Option>
                <Option value="height">Height</Option>
                <Option value="weight">Weight</Option>
                <Option value="eye-color">Eye Color</Option>
                <Option value="hair-color">Hair Color</Option>
              </MultiSelect>
            </Col>
          </Row>
        </MainWrapper>
      </Collapse>
    </div>
  );
};

export default Filter;
