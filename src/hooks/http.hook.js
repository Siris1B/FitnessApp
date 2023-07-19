import {useState, useCallback} from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const clearError = useCallback(() => setError(null), []);

  const request = useCallback(async (url, headers = {"Content-Type": "application/json"}, method = 'GET', body = null) => {

    setLoading(true);

    try {
        const responce = await fetch(url, {method, body, headers})

        if (!responce.ok) {
            throw new Error(`Could not fetch ${url} status: ${responce.status}`);
        }

        const data = await responce.json();

        setLoading(false);
        clearError();
        return data;
    } catch(e) {
        setLoading(false);
        setError(true);
        throw e;
    }
  }, []);

  return {loading, request, error, clearError}
}
