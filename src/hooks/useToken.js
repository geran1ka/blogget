import {useState, useEffect} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (token) return;

    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      console.log(token);
      setToken(token);
      localStorage.setItem('bearer', token);

      // window.location.assign(window.location.origin);
    }
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, [token]);

  const delToken = () => {
    setToken(localStorage.removeItem('bearer'));
  };
  return [token, delToken];
};
