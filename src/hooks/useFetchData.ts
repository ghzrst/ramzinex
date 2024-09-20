import { useQuery } from 'react-query';

import { fetchData } from '../api/fetchData';

export const useFetchData = (endpoint: string) => {
  return useQuery([endpoint], () => fetchData(endpoint), {
    refetchInterval: 20000,
    staleTime: 20000,
    cacheTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });
};
