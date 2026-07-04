/** 
import axios from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
  }
  
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "24e25923a33148b6a4f5db3ed50aad5d",
  },
});
*/
/**I want to do remove duplication all of data fetching hooks have created
 * Instead of export default axios here we create local const instance see below you code make upper code commants
 *
 */
import axios, { type AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "24e25923a33148b6a4f5db3ed50aad5d",
  },
});
//Here we create class for apiClient
class ApiClient<T> {
  //Here property
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  //In this I create single method called GetAll
  getAll = (config: AxiosRequestConfig) => {
    //In our games hook we need a configuration object for passing our query string parameters to backend
    //Hover get method look type of config object which is AxiosRequestConfig so we should add that in as a optional parameter to this method
    return (
      axiosInstance
        // this only place where we will refernce this interface we don't have to duplicated all our places
        .get<FetchResponse<T>>(this.endpoint, config)
        .then((res) => res.data)
    );
  };
}
export default ApiClient;
