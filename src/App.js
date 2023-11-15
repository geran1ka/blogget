import Header from './components/Header';
import Main from './components/Main';
import {AuthContextProvider} from './context/authContext';
// import {CommentContextProvider} from './context/commentContext';
import {PostContextProvider} from './context/postContext';
import {TokenContextProvider} from './context/tocenContext';


function App() {
  return (
    <TokenContextProvider>
      <AuthContextProvider>
        <PostContextProvider>
          {/* <CommentContextProvider> */}
          <Header />
          <Main />
          {/* </CommentContextProvider> */}
        </PostContextProvider>
      </AuthContextProvider>
    </TokenContextProvider>
  );
}

export default App;
