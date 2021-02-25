import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {connect} from 'react-redux';

const AlbumScreen = (props) => {
  return (
    <Container>
      <Title>siema</Title>
    </Container>
  );
};

const Container = styled(View)`
  flex: 1;
`;

const Title = styled(Text)`
  font-size: 20px;
`;

export default AlbumScreen;
