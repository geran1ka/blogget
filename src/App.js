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
// import React, {useRef} from 'react';

// const App = () => {
//   const inputRef = useRef(null);
//   const handlerSubmit = (e) => {
//     e.preventDefault();
//     console.log(inputRef.current.value);
//   };


//   return (
//     <form onSubmit={handlerSubmit} style={{padding: '50px'}}>
//       <input ref={inputRef} style={{marginRight: '20px'}} />
//       <button>log</button>
//     </form>
//   );
// };

export default App;
