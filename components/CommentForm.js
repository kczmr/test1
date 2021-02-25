import React from 'react';
import {Formik} from 'formik';
import useApi, {API_METHODS} from '../hooks/useApi';
import * as S from './styles/NewsDetailsStyles';
import {ActivityIndicator} from 'react-native';

const CommentForm = ({comments, postId}) => {
  const [loading, error, postComment] = useApi(API_METHODS.POST_COMMENT);

  const maxId =
    Math.max.apply(
      null,
      comments.map((item) => item.id),
    ) + 1;

  const handleSubmit = (data) => {
    const hardCoded = {
      postId: postId,
      id: maxId,
      title: '',
      email: 'kczmr.dev@gmail.com',
      comment: data.comment,
    };
    if (data.comment.length > 0) {
      postComment(hardCoded);
    }
  };

  return (
    <>
      <S.ComHeader>Comments</S.ComHeader>
      <Formik initialValues={{comment: ''}}>
        {({values, handleChange}) => (
          <>
            <S.Input
              textAlignVertical="top"
              multiline={true}
              value={values.comment}
              onChangeText={handleChange('comment')}
              placeholder="Here you can add your comment..."
            />
            <S.SubmitButton onPress={() => handleSubmit(values)}>
              {loading ? (
                <ActivityIndicator size={30} color="white" />
              ) : (
                <S.ButtonText>Add</S.ButtonText>
              )}
            </S.SubmitButton>
          </>
        )}
      </Formik>
    </>
  );
};

export default CommentForm;
