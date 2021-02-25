import React, {useEffect} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import useApi, {API_METHODS} from '../hooks/useApi';
import {Container, EmptyView} from '../components/styles/AppStyles';
import * as S from '../components/styles/NewsListStyles';

import Posts from '../components/Posts';

const NewsFeedScreen = (props) => {
  const [loading, error, posts] = useApi(API_METHODS.GET_POSTS);

  useEffect(() => {
    posts();
  }, [posts]);

  return (
    <Container>
      <S.HeaderWrapper>
        <S.HeaderText>News list</S.HeaderText>
      </S.HeaderWrapper>

      {loading ? (
        <S.IndicatorWrapper>
          <ActivityIndicator size={25} color="#5361c7" />
        </S.IndicatorWrapper>
      ) : (
        <ScrollView>
          <View style={EmptyView} />
          <Posts props={props} />
          <View style={EmptyView} />
        </ScrollView>
      )}
    </Container>
  );
};

export default NewsFeedScreen;
