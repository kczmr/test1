import {View, Text, TextInput} from 'react-native';
import {Button} from 'native-base';
import styled from 'styled-components';

//Header

export const HeaderText = styled(Text)`
  font-family: 'Khula-Bold';
  font-weight: bold;
  font-size: 16px;
`;

export const HeaderWrapper = styled(View)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  min-height: 80px;
  background-color: white;
  width: 100%;
`;

export const BackIcon = {
  position: 'absolute',
  left: 30,
  padding: 10,
  borderWidth: 2,
  borderColor: '#f0f2f5',
  borderRadius: 24,
  borderStyle: 'solid',
};

//Post

export const PostContainer = styled(View)`
  margin: 25px 0px 40px 0px;
  background-color: white;
  width: 90%;
  padding: 25px;
  border-radius: 8px;
`;

export const TitleText = styled(Text)`
  font-family: 'Khula-Bold';
  font-size: 20px;
  line-height: 26px;
  margin-bottom: 10px;
  color: #001524;
`;

export const BodyText = styled(Text)`
  font-family: 'Khula-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #182f40;
`;

//Input

export const ComHeader = styled(Text)`
  align-self: flex-start;
  font-family: 'Khula-Bold';
  font-size: 14px;
  color: #586976;
  margin: 0px 0px 5px 30px;
`;

export const Input = styled(TextInput)`
  font-family: 'Khula-Regular';
  font-size: 14px;
  color: #586976;
  background-color: white;
  width: 90%;
  margin-bottom: 15px;
  padding: 20px;
  height: 150px;
  border-radius: 8px;
`;

export const SubmitButton = styled(Button)`
  background-color: #5361c7;
  align-self: center;
  justify-content: center;
  width: 90%;
  height: 55px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

export const ButtonText = styled(Text)`
  font-family: 'Khula-Bold';
  font-size: 14px;
  color: white;
`;

//Comments

export const CommentWrapper = styled(View)`
  margin-bottom: 10px;
  background-color: white;
  width: 90%;
  padding: 25px;
  border-radius: 8px;
`;

export const Owner = styled(Text)`
  font-family: 'Khula-Bold';
  font-size: 14px;
  color: #001524;
  margin-bottom: 5px;
`;

export const CommentText = styled(Text)`
  font-family: 'Khula-Regular';
  font-size: 14px;
  color: #001524;
`;

export const NoCommentText = styled(Text)`
  font-family: 'Khula-Regular';
  font-size: 14px;
  color: #001524;
  align-self: center;
`;
