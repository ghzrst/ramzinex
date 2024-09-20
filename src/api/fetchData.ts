import apiClient from './apiClient';

export const fetchData = async (endpoint: string) => {
  return await apiClient(endpoint);
};
