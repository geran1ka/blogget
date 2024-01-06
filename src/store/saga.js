import {all} from 'redux-saga/effects';
import {watchPosts} from './posts/postsSaga';
import {watchSearch} from './search/searchSaga';

export default function* rootSaga() {
  yield all([
    watchPosts(),
    watchSearch(),
  ]);
}
