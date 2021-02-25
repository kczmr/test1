import React from 'react';
import * as S from './styles/NewsDetailsStyles';

const CurrentPost = ({title, body}) => {
  return (
    <S.PostContainer>
      <S.TitleText>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </S.TitleText>
      <S.BodyText>{body.charAt(0).toUpperCase() + body.slice(1)}</S.BodyText>
    </S.PostContainer>
  );
};

export default CurrentPost;
