/**
 * DELETE This file no longer needed
 */

//create a generic data fetching hook

// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import {
//   CanceledError,
//   type AxiosRequestConfig,
// } from "axios";
//In this module we have use FetchResponsive interface so it doesnot make sense to keep this file in dataHook  so better way is that move this interface to apiClient when ever we use ApiClient we need this interface
// export interface FetchResponse<T> {
//   count: number;
//   results: T[];
// }
//so here we use Genre type parameter <T> instead of <Genre[]>
/**
 * So It is retired.
const useData = <T>(
  endPoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<FetchResponse<T>>(endPoint, {
        signal: controller.signal,
        ...requestConfig, //you can add any additional property here.
      })
      .then((res) => {
        setData(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, deps ? [...deps] : []);

  return { data, error, isLoading };
};
export default useData;
 */

/**
 * Now we are fetching games using reactQuery now we are ready to retire data hook
 * Becoz it cannot use anyWhere
 * 
*/