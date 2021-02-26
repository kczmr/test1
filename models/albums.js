const getAlbums = {
  name: 'Albums',
  state: {albums: [], photos: []},
  reducers: {
    get(state, payload) {
      return {albums: [...payload], photos: [...state.photos]};
    },
    getPhotos(state, payload) {
      return {
        albums: [...state.albums],
        photos: [...state.photos].concat(payload),
      };
    },
  },
};

export default getAlbums;
