import React from 'react';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as S from './styles/NewsListStyles';

const Posts = ({props}) => {
  const posts = useSelector((state) => state.Posts.posts);

  return (
    <>
      {posts.length > 0 &&
        posts.map((el, key) => (
          <S.PostContainer key={key}>
            <S.PostWrapper>
              <S.TitleText>
                {el.title.charAt(0).toUpperCase() + el.title.slice(1)}
              </S.TitleText>
              <S.BodyText numberOfLines={2}>
                {el.body.charAt(0).toUpperCase() + el.body.slice(1)}
              </S.BodyText>
            </S.PostWrapper>

            <Icon
              name="chevron-right"
              size={20}
              color="#466bc9"
              style={S.ArrowIcon}
              onPress={() =>
                props.navigation.navigate('CurrentPost', {
                  postId: el.id,
                  title: el.title,
                  body: el.body,
                })
              }
            />
          </S.PostContainer>
        ))}
    </>
  );
};

export default Posts;
