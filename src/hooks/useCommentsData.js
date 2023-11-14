import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tocenContext';


export const useCommentsData = (id) => {
  const [comment, setComment] = useState([]);
  const {token} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;

    if (!id) {
      console.log('нет id');
      return;
    }

    fetch(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then((data) => {
        setComment(data[0].data.children[0].data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token, id]);


  return [comment, setComment];
};
