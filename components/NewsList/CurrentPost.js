import React from 'react';
import {firstLetterToUpper} from '../../helpers/consts';
import * as S from '../styles/NewsDetailsStyles';

const CurrentPost = ({title, body}) => {
  return (
    <S.PostContainer>
      <S.TitleText>{firstLetterToUpper(title)}</S.TitleText>
      <S.BodyText>{firstLetterToUpper(body)}</S.BodyText>
    </S.PostContainer>
  );
};

export default CurrentPost;
