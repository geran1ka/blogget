import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useSelector} from 'react-redux';


export const usePost = () => {
  const token = useSelector(state => state.token.token);
  const [post, setPost] = useState([]);

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
