import * as React from 'react';
import { ButtonProps } from 'reactstrap';
import { ButtonText, ContentWrapper, CustomButton, IconWrapper } from './styles';

interface ButtonStyledProps extends ButtonProps {
  text: string;
  icon?: string;
  statusButtonColor?: string;
}

/**
 * ButtonStyled componente UI personalizado referente a un botón con la posibilidad de agregar un icono.
 *
 * @typedef {ButtonProps} ButtonStyledProps uso de las props nativas de un botón
 * @param {string} text
 * @param {string} icon opcional
 * @param {string} statusButtonColor opcional
 *
 * Uso:
 * ```js
 * <ButtonStyled text="Load more..." onClick={toggle} />
 * ```
 */
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
