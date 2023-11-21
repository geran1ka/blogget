import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension';
import {tokenReducer, tokenMiddleware} from './tokenReducer';
import thunk from 'redux-thunk';
import {authReducer} from './auth/authReducer';
import {postsReducer} from './posts/postsReducer';
import {commentsReducer} from './comments/commentsReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  auth: authReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

// const logger = (store) => (next) => (action) => {
//   console.log('action: ', action);
//   next(action);
// };

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(tokenMiddleware, thunk)));
