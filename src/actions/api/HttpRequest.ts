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

export class HttpRequest {
  public async Get<T>(request: string): Promise<IHttpResponse<T>> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.GET,
    };

    const response = await fetch(request, headers);
    return this.GetResponse(response);
  }

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
