import * as React from 'react';
import { ButtonProps } from 'reactstrap';
import { ButtonText, ContentWrapper, CustomButton, IconWrapper } from './styles';

interface ButtonStyledProps extends ButtonProps {
  text: string;
  icon?: string;
  statusButtonColor?: string;
}

const ButtonStyled: React.FC<ButtonStyledProps> = ({ text, icon, statusButtonColor, ...rest }) => {
  return (
    <CustomButton {...rest} statusButtonColor={statusButtonColor}>
      <ContentWrapper>
        {icon && (
          <IconWrapper>
            <i className={icon} />
          </IconWrapper>
        )}
        <ButtonText icon={icon}>{text}</ButtonText>
      </ContentWrapper>
    </CustomButton>
  );
};

export default ButtonStyled;
