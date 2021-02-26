import React, {useEffect} from 'react';
import {ScrollView, ActivityIndicator} from 'react-native';
import useApi, {API_METHODS} from '../hooks/useApi';
import {Container, IndicatorWrapper} from '../components/styles/AppStyles';
import * as S from '../components/styles/NewsListStyles';
import Posts from '../components/NewsList/Posts';

const NewsListScreen = (props) => {
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
        <IndicatorWrapper>
          <ActivityIndicator size={25} color="#5361c7" />
        </IndicatorWrapper>
      ) : (
        <ScrollView>
          <Posts props={props} />
        </ScrollView>
      )}
    </Container>
  );
};

export default NewsListScreen;
