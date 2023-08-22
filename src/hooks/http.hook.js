import {useCallback} from 'react';

export const useHttp = () => {


  const request = useCallback(async (url, headers = {"Content-Type": "application/json"}, method = 'GET', body = null) => {

    try {
        const responce = await fetch(url, {method, body, headers})

        if (!responce.ok) {
            throw new Error(`Could not fetch ${url} status: ${responce.status}`);
        }

        const data = await responce.json();

        return data;
    } catch(e) {
        throw e;
    }
  }, []);

  return {request}
}
