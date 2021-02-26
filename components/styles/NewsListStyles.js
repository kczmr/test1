import {View, Text} from 'react-native';
import styled from 'styled-components';

export const HeaderText = styled(Text)`
  font-family: 'Khula-Bold';
  font-weight: bold;
  font-size: 16px;
`;

export const HeaderWrapper = styled(View)`
  justify-content: center;
  align-items: center;
  min-height: 80px;
  background-color: white;
  width: 100%;
`;

export const PostContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  margin-top: 10px;
  width: 90%;
  background-color: white;
  padding: 25px;
  border-radius: 8px;
  flex-grow: 1;
`;

export const PostWrapper = styled(View)`
  flex-direction: column;
  max-width: 80%;
`;

export const TitleText = styled(Text)`
  font-family: 'Khula-Bold';
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 5px;
  color: #001524;
`;

export const BodyText = styled(Text)`
  font-family: 'Khula-Regular';
  font-size: 14px;
  line-height: 20px;
  color: #a0abb2;
`;

export const ArrowIcon = {
  alignSelf: 'center',
  backgroundColor: '#ECF0FA',
  borderRadius: 10,
  marginRight: 10,
};
