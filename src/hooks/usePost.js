import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tocenContext';


export const usePost = () => {
  const [post, setPost] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then((data) => {
        setPost(data.data.children);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);


  return [post];
};
