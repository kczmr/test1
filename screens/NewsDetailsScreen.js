import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Container} from '../components/styles/AppStyles';
import useApi, {API_METHODS} from '../hooks/useApi';
import * as S from '../components/styles/NewsDetailsStyles';
import CurrentPost from '../components/NewsList/CurrentPost';
import CommentFrom from '../components/NewsList/CommentForm';
import Comments from '../components/NewsList/Comments';

const NewsDetailsScreen = ({navigation, route}) => {
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
          size={30}
          color="#147865"
          style={S.BackIcon}
          onPress={() => navigation.goBack()}
        />
        <S.HeaderText>News details</S.HeaderText>
      </S.HeaderWrapper>

      <ScrollView>
        <S.CenterView>
          <CurrentPost title={title} body={body} />
          <CommentFrom comments={comments} postId={postId} />
          <Comments loading={loading} comments={comments} />
        </S.CenterView>
      </ScrollView>
    </Container>
  );
};

export default NewsDetailsScreen;
