import React from 'react';
import {useSelector} from 'react-redux';
import {firstLetterToUpper} from '../../helpers/consts';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from '../styles/NewsListStyles';
import {EmptyView} from '../styles/AppStyles';

const Posts = ({props}) => {
  const posts = useSelector((state) => state.Posts.posts);

  return (
    <>
      <EmptyView />
      {posts.length > 0 &&
        posts.map((el, key) => (
          <S.PostContainer key={key}>
            <S.PostWrapper>
              <S.TitleText>{firstLetterToUpper(el.title)}</S.TitleText>
              <S.BodyText numberOfLines={2}>
                {firstLetterToUpper(el.body)}
              </S.BodyText>
            </S.PostWrapper>

            <Icon
              name="chevron-right"
              size={20}
              color="#466bc9"
              style={S.ArrowIcon}
              onPress={() => {
                props.navigation.navigate('NewsDetails', {
                  postId: el.id,
                  title: el.title,
                  body: el.body,
                });
              }}
            />
          </S.PostContainer>
        ))}
      <EmptyView />
    </>
  );
};

export default Posts;
