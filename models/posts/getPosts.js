import {GET_POSTS} from './actionTypes';

const initialState = {
  items: [],
};

const getPosts = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;

    default:
      return state;
  }
};
export default getPosts;
