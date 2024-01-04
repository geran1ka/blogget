// import {takeLatest, put, select, call} from 'redux-saga/effects';
import {URL_API} from '../../api/const';
import axios from 'axios';

import {SEARCH_REQUEST, searchRequestError, searchRequestSuccess} from './searchAction';
import {call, put, select, takeLatest} from '@redux-saga/core/effects';

function* fetchSearch(action) {
  const token = yield select(state => state.token.token);

  try {
    const request = yield call(axios, `${URL_API}/search?q=${action.search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });

    yield put(searchRequestSuccess(request.data.data));
  } catch (error) {
    yield put(searchRequestError(error));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}
