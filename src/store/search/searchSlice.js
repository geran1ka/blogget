// import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
// import axios from 'axios';
// import {URL_API} from '../../api/const';

// const initialState = {
//   posts: [],
//   error: null,
//   after: '',
//   isLast: false,
//   countLoadPage: 0,
//   page: '',
//   status: ''
// };

// export const searchRequestAsync = createAsyncThunk(
//   'fetch/search',
//   (search, {getState, dispatch}) => {
//     const token = getState().token.token;
//     // const after = getState().search.after;
//     // const isLast = getState().search.isLast;

//     return axios(`${URL_API}/search?q=${search}?limit=10&`, {
//       headers: {
//         Authorization: `bearer ${token}`,
//       },
//     })
//       .then(({data}) => data.data)
//       .catch((error) => ({error: error.toString()}));
//   }
// );

// export const searchSlice = createSlice({
//   name: 'search',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder
//       .addCase(searchRequestAsync.pending, (state, action) => {
//         state.loading = true;
//         state.error = '';
//       })
//       .addCase(searchRequestAsync.fulfilled, (state, action) => {
//         console.log('action: ', action);
//         state.posts = [...state.posts, ...action.payload.children];
//         state.after = action.payload.after;
//         state.isLast = !action.payload.after;
//         state.countLoadPage += 1;
//         state.error = '';
//         state.status = 'loaded';
//       })
//       .addCase(searchRequestAsync.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error;
//       });
//   }
// });

// export default searchSlice.reducer;
