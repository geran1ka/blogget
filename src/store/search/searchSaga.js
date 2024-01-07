import {takeLatest, put, select, call} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {postsSlice} from '../posts/postsSlice';


function* fetchSearch(action) {
  let search = yield select(state => state.posts.search);
  console.log('search fetchSearch: ', search);
  if (action.payload) {
    search = action.payload;
  }
  const token = yield select(state => state.token.token);
  const after = yield select(state => state.posts.afterSearch);
  const isLast = yield select(state => state.posts.isLast);


  if (!token || isLast) return;

  try {
    const request = yield call(axios,
      `${URL_API}/search?q=${search}&limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
    yield put(postsSlice.actions.searchRequestSuccess(request.data.data));
  } catch (error) {
    yield put(postsSlice.actions.searchRequestError(error));
  }
}

export function* watchSearch() {
  yield takeLatest(postsSlice.actions.searchRequest, fetchSearch);
}
