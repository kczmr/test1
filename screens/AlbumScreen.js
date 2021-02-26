import React, {useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';
import useApi, {API_METHODS} from '../hooks/useApi';
import {Container, IndicatorWrapper} from '../components/styles/AppStyles';
import {HeaderWrapper, HeaderText} from '../components/styles/NewsListStyles';
import Albums from '../components/Albums';

const AlbumScreen = (props) => {
  const [loading, error, getAlbums] = useApi(API_METHODS.GET_ALBUMS);
  const albums = useSelector((state) => state.Albums.albums);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getAlbums();
    setTimeout(() => setLoaded(true), 2000);
  }, [getAlbums]);

  return (
    <Container>
      <HeaderWrapper>
        <HeaderText>Albums</HeaderText>
      </HeaderWrapper>
      {loading || !loaded ? (
        <IndicatorWrapper>
          <ActivityIndicator size={25} color="#5361c7" />
        </IndicatorWrapper>
      ) : (
        <Albums albums={albums} />
      )}
    </Container>
  );
};

export default AlbumScreen;
