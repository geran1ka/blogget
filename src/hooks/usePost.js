import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tocenContext';


export const usePost = () => {
  const [post, setPost] = useState({});
  const {token} = useContext(tokenContext);

  useEffect(() => {
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          // eslint-disable-next-line space-unary-ops
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log('data: ', data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);


  return [post, setPost];
};
