declare interface IAPIresponse<T> {
  message: string;
  data: T;
}

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

  public async Post<T>(request: string, object: any): Promise<IHttpResponse<T>> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.POST,
      body: JSON.stringify(object),
    };
    const response = await fetch(request, headers);
    return this.GetResponse(response);
  }

  public async PostForm<T>(request: string, form: FormData): Promise<IHttpResponse<T>> {
    let headers = {
      method: RequestMethod.POST,
      body: form,
    };
    const response = await fetch(request, headers);
    return this.GetResponse(response);
  }

  public async Put<T>(request: string, object: any): Promise<IHttpResponse<T>> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.PUT,
      body: JSON.stringify(object),
    };
    const response = await fetch(request, headers);
    const body = await response.json();
    return body;
  }
  public async Delete<T>(request: string, object: any): Promise<IHttpResponse<T>> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.DELETE,
      body: JSON.stringify(object),
    };
    const response = await fetch(request, headers);
    const body = await response.json();
    return body;
  }

  public async Download(request: string, fileName: string): Promise<void> {
    let headers = {
      ...defaultHeader,
      method: RequestMethod.GET,
    };
    const response = await fetch(request, headers);
    const data = await response.blob();
    let csvURL = window.URL.createObjectURL(data);
    let tempLink = document.createElement('a');
    tempLink.href = csvURL;
    tempLink.setAttribute('download', fileName);
    tempLink.click();
  }

  private async GetResponse<T>(response: Response): Promise<IHttpResponse<T>> {
    if (response.status === 200) {
      const apiData: IAPIresponse<T> = await response.json();
      return {
        okay: true,
        message: apiData.message,
        data: apiData.data,
      };
    } else {
      return {
        okay: false,
        message: await response.text(),
        data: null,
      };
    }
  }
}
