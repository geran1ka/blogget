import {takeLatest, put, select, call} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {postsSlice} from '../posts/postsSlice';


function* fetchSearch(action) {
  const token = yield select(state => state.token.token);
  const after = yield select(state => state.posts.afterSearch);
  const isLast = yield select(state => state.posts.isLast);


  if (!token || isLast) return;

  try {
    const request = yield call(axios,
      `${URL_API}/search?q=${action.payload}&limit=20&${after ? `after=${after}` : ''}`, {
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
  yield takeLatest(postsSlice.actions.searchRequest.type, fetchSearch);
}
