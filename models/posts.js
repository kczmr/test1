const getPosts = {
  name: 'Posts',
  state: {posts: [], comments: []},
  reducers: {
    get(state, payload) {
      return {posts: payload, comments: [...state.comments]};
    },
    getComments(state, payload) {
      return {posts: [...state.posts], comments: [...payload]};
    },
    postComment(state, payload) {
      return {
        posts: [...state.posts],
        comments: [...state.comments].concat(payload),
      };
    },
  },
};

export default getPosts;
