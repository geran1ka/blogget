export const setToken = (token) => {
  setToken(localStorage.getItem('bearer'));
};

export const getToken = () => {
  let token = ''
  if (location.pathname.includes('/auth')) {
    const token = new URLSearchParams(location.hash.substring(1))
      .get('access_token');
    setToken(token);
    localStorage.setItem('bearer', token);
    setTimeout(() => window.location.assign(window.location.origin), 1000);
  }
  if (localStorage.getItem('bearer')) {
    setToken(localStorage.getItem('bearer'));
  }

  return token;
};
