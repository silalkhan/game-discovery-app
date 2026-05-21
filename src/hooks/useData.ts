//create a generic data fetching hook

import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


interface FetchResponse<T> {
  count: number;
  results: T [];
}
//so here we use Genre type parameter <T> instead of <Genre[]>
const useData =<T> (endPoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endPoint, { signal })
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
  }, []);
  return { data, error, isLoading };
};

export default useData;
