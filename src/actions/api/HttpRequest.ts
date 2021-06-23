enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface IHeaders {
  method: RequestMethod;
  body: any | null;
  headers: any;
}

const defaultHeader: IHeaders = {
  method: RequestMethod.GET,
  body: null,
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * HttpRequest es una clase que ayuda a hacer realizar todas las llamadas HTTP
 */
export class HttpRequest {
  /**
   * Método GET que permite traer toda la información anidada dentro de uns estructura de `results`
   *
   * @param {string} request
   * @returns {Promise<IHttpResponse<T>>} respuesta
   */
  public async Get<T>(request: string): Promise<IHttpResponse<T>> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.GET,
    };

    const response = await fetch(request, headers);
    return this.GetResponse(response);
  }

  /**
   * Método GET para todas aquellas peticiones que su resultado no tiene una estructura anidada
   *
   * @param {string} request
   * @returns {Promise<IHttpResponse<T>>} respuesta
   */
  public async GetFull<T>(request: string): Promise<IHttpResponse<T>> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.GET,
    };

    const response = await fetch(request, headers);

    if (response.status === 200) {
      const apiData = await response.json();
      return {
        okay: true,
        message: apiData.response,
        data: apiData,
        error: apiData.error,
      };
    } else {
      return {
        okay: false,
        message: await response.text(),
        data: null,
        error: 'error',
      };
    }
  }

  private async GetResponse<T>(response: Response): Promise<IHttpResponse<T>> {
    if (response.status === 200) {
      const apiData = await response.json();
      return {
        okay: true,
        message: apiData.response,
        data: apiData.results,
        error: apiData.error,
      };
    } else {
      return {
        okay: false,
        message: await response.text(),
        data: null,
        error: 'error',
      };
    }
  }
}
