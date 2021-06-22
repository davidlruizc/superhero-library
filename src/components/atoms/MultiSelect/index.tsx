import * as React from 'react';
import { FormGroup, InputProps } from 'reactstrap';
import { SelectInput, SelectLabel } from './styles';

interface MultiSelectProps extends InputProps {
  label: string;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ label, children, ...props }) => {
  return (
    <React.Fragment>
      <FormGroup>
        <SelectLabel for="exampleSelect">{label}</SelectLabel>
        <SelectInput {...props} type="select" name="select" id="exampleSelect">
          {children}
        </SelectInput>
      </FormGroup>
    </React.Fragment>
  );
};

export default MultiSelect;
