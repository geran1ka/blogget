import axios from 'axios';
import {call, put, select, takeLatest} from 'redux-saga/effects';
import {postsSlice} from './postsSlice';
import {URL_API} from '../../api/const';


function* fetchPosts(action) {
  let page = yield select(state => state.posts.page);
  if (action.payload) {
    page = action.payload;
  }

  const token = yield select(state => state.token.token);
  const after = yield select(state => state.posts.after);
  const isLast = yield select(state => state.posts.isLast);

  if (!token || isLast) return;

  try {
    const request = yield call(axios, `${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    if (after) {
      yield put(postsSlice.actions.postRequestSuccessAfter(request.data.data));
    } else {
      yield put(postsSlice.actions.postRequestSuccess(request.data.data));
    }
  } catch (error) {
    yield put(postsSlice.actions.postRequestError(error));
  }
}

export function* watchPosts() {
  yield takeLatest(postsSlice.actions.postRequest, fetchPosts);
}
