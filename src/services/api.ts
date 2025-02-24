import axios, { AxiosRequestConfig } from "axios";

export interface FetchResult<T> {
  count: number;
  next: string | null;
  results: T[];
}

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  params: {
    key: import.meta.env.VITE_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) => {
    return api
      .get<FetchResult<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  get = (id: number | string) => {
    return api.get<T>(`${this.endpoint}/${id}`).then((res) => res.data);
  };
}

export default APIClient;
