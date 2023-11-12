import {useState, useEffect} from 'react';
import {URL_POST} from '../api/const';

export const usePost = () => {
  const [post, setPost] = useState({});


  useEffect(() => {
    fetch(`${URL_POST}/best`)
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
