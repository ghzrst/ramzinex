const API_BASE_URL = 'https://publicapi.ramzinex.com';

const apiClient = async (endpoint: string) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return response.json();
};

export default apiClient;
