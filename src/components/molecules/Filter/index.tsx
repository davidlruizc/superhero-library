import ButtonStyled from 'components/atoms/ButtonStyled';
import * as React from 'react';
import { Card, CardBody, Collapse } from 'reactstrap';
import { MainWrapper, Title, Text } from './styles';

const Filter: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <MainWrapper>
        <Title>Filter</Title>
        <Text>Organize your favorite characters as you wish</Text>
        <ButtonStyled onClick={toggle} text="Filters" />
      </MainWrapper>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident.
          </CardBody>
        </Card>
      </Collapse>
    </div>
  );
};

export default Filter;
