import * as React from 'react';
import { ButtonProps } from 'reactstrap';
import { CustomButton } from './styles';

interface ButtonStyledProps extends ButtonProps {
  text: string;
}

const ButtonStyled: React.FC<ButtonStyledProps> = ({ text }) => {
  return <CustomButton>{text}</CustomButton>;
};

export default ButtonStyled;
