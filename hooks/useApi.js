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
        if (response.status === 201) {
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

  const getAlbums = useCallback(async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await api.get('/albums');
      if (response.status === 200) {
        response.data.map((el) => getPhotos(el.id));
        dispatch.Albums.get(response.data);
        setLoading(false);
      }
      return true;
    } catch (err) {
      console.log(err, 'err');
      setLoading(false);
      setError(err);
      return false;
    }
  }, [dispatch.Albums, getPhotos]);

  const getPhotos = useCallback(
    async (id) => {
      try {
        const response = await api.get(`/albums/${id}/photos`);
        if (response.status === 200) {
          dispatch.Albums.getPhotos(response.data[0]);
        }
      } catch (err) {
        console.log(err, 'err');
        return false;
      }
    },
    [dispatch.Albums],
  );

  const allowedMethods = {
    getPosts,
    getComments,
    postComment,
    getAlbums,
  };

  return [isLoading, error, allowedMethods[method]];
};

export const API_METHODS = Object.freeze({
  GET_POSTS: 'getPosts',
  GET_COMMENTS: 'getComments',
  POST_COMMENT: 'postComment',
  GET_ALBUMS: 'getAlbums',
});

export default useApi;
