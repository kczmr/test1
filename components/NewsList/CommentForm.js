import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Formik} from 'formik';
import useApi, {API_METHODS} from '../../hooks/useApi';
import {maxId} from '../../helpers/consts';
import * as S from '../styles/NewsDetailsStyles';

const CommentForm = ({comments, postId}) => {
  const [loading, error, postComment] = useApi(API_METHODS.POST_COMMENT);

  const handleSubmit = (data) => {
    const hardCoded = {
      postId: postId,
      id: maxId(comments),
      name: '',
      email: 'kczmr.dev@gmail.com',
      body: data.comment,
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
