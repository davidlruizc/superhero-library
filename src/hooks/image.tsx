import * as React from 'react';

/**
 * Custom Hook: Identifica si una `URL` de una imagen retorna un 404 o algún otro error y permite reemplazarla por una por defecto
 */
export const useImageError = () => {
  const [el, setEl] = React.useState<any | null>(null); // contains image reference
  const [error, setError] = React.useState<boolean>(false); // contains error flag

  const _handleError = () => {
    setError(true);
  }; // set error
  const retry = () => {
    setError(false);
  }; // set error false to img can re-render

  React.useEffect(() => {
    // use of error event of the image tag
    el?.addEventListener('error', _handleError);

    return () => {
      el?.removeEventListener('error', _handleError);
    };
  }, [el]);

  return [
    setEl, // set the image ref
    error, // error flag
    retry, // a func, which can be used to re-render image
    el, // img ref(for special case which requires ref)
  ];
};
