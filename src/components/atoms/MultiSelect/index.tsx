import * as React from 'react';
import { FormGroup, InputProps } from 'reactstrap';
import { SelectInput, SelectLabel } from './styles';

interface MultiSelectProps extends InputProps {
  label: string;
}

/**
 * MultiSelect es un componente personalizado basado en select option
 * 
 * @param {string} label Título del select
 * @typedef {InputProps} MultiSelectProps Todas las propiedades nativas de un select están a disposición de uso
 * 
 * Uso:
 * ```jsx
 * <MultiSelect
    label="Order by powerstats"
    onChange={(value) => filterPowerstats(value.target.value)}
    defaultValue={'DEFAULT'}
  >
    <Option value="DEFAULT">Open this select powerstats</Option>
  </MultiSelect>
 * ```
 */
const MultiSelect: React.FC<MultiSelectProps> = ({ label, children, ...props }) => {
  return (
    <React.Fragment>
      <FormGroup>
        <SelectLabel>{label}</SelectLabel>
        <SelectInput {...props} type="select" name="select">
          {children}
        </SelectInput>
      </FormGroup>
    </React.Fragment>
  );
};

export default MultiSelect;
