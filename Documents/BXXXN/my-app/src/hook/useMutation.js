// useMutation.js
import { useState } from 'react';
import { apiRequest } from '../components/apiservices/ApiServices';

export const useMutation = (method, url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const mutate = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const result = await apiRequest(method, url, data);
      setResponse(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { response, loading, error, mutate };
};
