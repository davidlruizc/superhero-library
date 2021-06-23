import * as React from 'react';
import { ContainerWrapper } from './styles';

interface ContentProps {
  children: React.ReactNode;
}

/**
 * Content layout permite anidar el componente padre con el diseño base, como fondo.
 *
 * @param {React.ReactNode} children
 *
 * Uso:
 * ```html
 * <Content>contenido de la página</Content>
 * ```
 */
const Content: React.FC<ContentProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Content;
