import {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/';

const api = axios.create({
  baseURL: API_BASE_URL,
});

const useApi = (method) => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const getPosts = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await api.get('/posts');
      if (response.status === 200) {
        dispatch.Posts.get(response.data);
        setLoading(false);
      }
      return true;
    } catch (err) {
      console.log(err, 'err');
      setLoading(false);
      setError(err);
      return false;
    }
  }, [dispatch.Posts]);

  const getComments = useCallback(
    async (id) => {
      setError(null);
      setLoading(true);
      try {
        const response = await api.get(`/posts/${id}/comments`);
        if (response.status === 200) {
          dispatch.Posts.getComments(response.data);
          setLoading(false);
        }
        return true;
      } catch (err) {
        console.log(err, 'err');
        setLoading(false);
        setError(err);
        return false;
      }
    },
    [dispatch.Posts],
  );

  const postComment = useCallback(
    async (data) => {
      setError(null);
      setLoading(true);
      try {
        const response = await api.post(`/posts/${data.postId}/comments`);
        console.log(response);
        if (response.status === 201) {
          console.log(data);
          dispatch.Posts.postComment(data);
          setLoading(false);
        }
      } catch (err) {
        console.log(err, 'err');
        setLoading(false);
        setError(err);
        return false;
      }
    },
    [dispatch.Posts],
  );

  const allowedMethods = {
    getPosts,
    getComments,
    postComment,
  };

  return [isLoading, error, allowedMethods[method]];
};

export const API_METHODS = Object.freeze({
  GET_POSTS: 'getPosts',
  GET_COMMENTS: 'getComments',
  POST_COMMENT: 'postComment',
});

export default useApi;
