import Header from './components/Header';
import Main from './components/Main';
import {PostContextProvider} from './context/postContext';
import {useDispatch} from 'react-redux';

import {getToken} from './api/token';
import {updateToken} from './store/tokenReducer';


const App = () => {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));

  return (
    <PostContextProvider>
      <Header />
      <Main />
    </PostContextProvider>
  );
};

export default App;
