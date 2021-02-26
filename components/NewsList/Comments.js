import React from 'react';
import {ActivityIndicator} from 'react-native';
import * as S from '../styles/NewsDetailsStyles';

const Comments = ({loading, comments}) => {
  return (
    <>
      {loading ? (
        <ActivityIndicator size={15} color="#5361c7" />
      ) : comments.length > 0 ? (
        comments.map((el, key) => (
          <S.CommentWrapper key={key}>
            <S.Owner>{el.email}</S.Owner>
            <S.CommentText>{el.body}</S.CommentText>
          </S.CommentWrapper>
        ))
      ) : (
        <S.CommentText>There is no comments</S.CommentText>
      )}
    </>
  );
};

export default Comments;
