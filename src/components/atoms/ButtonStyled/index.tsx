import * as React from 'react';
import { ButtonProps } from 'reactstrap';
import { ButtonText, ContentWrapper, CustomButton, IconWrapper } from './styles';

interface ButtonStyledProps extends ButtonProps {
  text: string;
  icon?: string;
}

const ButtonStyled: React.FC<ButtonStyledProps> = ({ text, icon, ...props }) => {
  return (
    <CustomButton {...props}>
      <ContentWrapper>
        {icon && (
          <IconWrapper>
            <i className={icon} />
          </IconWrapper>
        )}
        <ButtonText>{text}</ButtonText>
      </ContentWrapper>
    </CustomButton>
  );
};

export default ButtonStyled;
