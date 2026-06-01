//create a generic data fetching hook

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import {
  CanceledError,
  type AxiosRequestConfig,
} from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
//so here we use Genre type parameter <T> instead of <Genre[]>
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
