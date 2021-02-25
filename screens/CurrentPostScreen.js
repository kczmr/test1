import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from '../components/styles/AppStyles';
import useApi, {API_METHODS} from '../hooks/useApi';
import * as S from '../components/styles/NewsDetailsStyles';

import CurrentPost from '../components/CurrentPost';
import CommentFrom from '../components/CommentForm';
import Comments from '../components/Comments';
import {useSelector} from 'react-redux';

const CurrentPostScreen = ({navigation, route}) => {
  const [loading, error, getComments] = useApi(API_METHODS.GET_COMMENTS);
  const comments = useSelector((state) => state.Posts.comments);
  const postId = route.params.postId;
  const title = route.params.title;
  const body = route.params.body;

  useEffect(() => {
    getComments(postId);
  }, [getComments, postId]);

  return (
    <Container>
      <S.HeaderWrapper>
        <Icon
          name="chevron-left"
          size={20}
          color="#147865"
          style={S.BackIcon}
          onPress={() => navigation.goBack()}
        />
        <S.HeaderText>News details</S.HeaderText>
      </S.HeaderWrapper>

      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <CurrentPost title={title} body={body} />
          <CommentFrom comments={comments} postId={postId} />
          <Comments loading={loading} comments={comments} />
        </View>
      </ScrollView>
    </Container>
  );
};

export default CurrentPostScreen;
