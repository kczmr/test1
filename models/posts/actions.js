import {GET_POSTS} from './actionTypes';

export const getPosts = (data) => ({
  type: GET_POSTS,
  payload: data,
});
