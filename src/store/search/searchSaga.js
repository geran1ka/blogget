import {takeLatest, put, select, call} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';
import {searchSlice} from './searchSlice';


function* fetchSearch(action) {
  const token = yield select(state => state.token.token);
  const after = yield select(state => state.search.after);
  const isLast = yield select(state => state.search.isLast);

  if (!token || isLast) return;

  try {
    const request = yield call(axios,
      `${URL_API}/search?q=${action.payload}&limit=10&${after ? `after=${after}` : ''}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });

    yield put(searchSlice.actions.searchRequestSuccess(request.data.data));
  } catch (error) {
    yield put(searchSlice.actions.searchRequestError(error));
  }
}

export function* watchSearch() {
  yield takeLatest(searchSlice.actions.searchRequest, fetchSearch);
}
