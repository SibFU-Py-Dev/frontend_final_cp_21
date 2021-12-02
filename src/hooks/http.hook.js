import { useState, useCallback, useContext } from 'react';
import { AuthContext } from '../context/authContext';

const name_server_url = '/api_1_0';

const update_token = async (auth) => {
  const res_refresh = await fetch(name_server_url + '/refresh/', {
    method: 'POST',
    body: {},
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + auth.refreshToken,
    },
  });
  const data_refresh = await res_refresh.json();
  if (!res_refresh.ok) {
    auth.logout();
    throw new Error(data_refresh.message || 'Что-то пошло не так');
  }
  await auth.logout();
  await auth.login(data_refresh.access_token, auth.refreshToken);

  return data_refresh.access_token;
};

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const auth = useContext(AuthContext);

  const request = useCallback(
    async (url, method = 'GET', body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers['Content-Type'] = 'application/json';
        }
        if (auth.token) {
          headers['Authorization'] = 'Bearer ' + auth.token;
        }
        const response = await fetch(name_server_url + url, {
          method,
          body,
          headers,
        });
        let data = await response.json();
        if (!response.ok) {
          if (response.status === 401) {
            let new_access_token = await update_token(auth);
            headers['Authorization'] = 'Bearer ' + new_access_token;
            const response = await fetch(name_server_url + url, {
              method,
              body,
              headers,
            });
            data = await response.json();
          } else {
            throw new Error(data.message || 'Что-то пошло не так');
          }
        }

        setLoading(false);

        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, error, clearError };
};
