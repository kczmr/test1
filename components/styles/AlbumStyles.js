import styled from 'styled-components';
import {View, Text} from 'react-native';

export const FlexView = styled(View)`
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const AlbumWrapper = styled(View)`
  align-items: center;
  align-self: center;
  margin: 10px;
`;

export const Title = styled(Text)`
  font-family: 'Khula-Bold';
  font-size: 14px;
  color: #001524;
  padding: 10px;
  width: 160px;
  text-align: center;
  position: absolute;
  background-color: white;
  bottom: -0.5px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

export const ImageRadius = {
  borderRadius: 8,
};
