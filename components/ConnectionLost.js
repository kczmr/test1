import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StatusBar} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';

const ConnectionLost = () => {
  const [loaded, setLoaded] = useState(false);
  const netInfo = useNetInfo();

  useEffect(() => {
    setTimeout(() => setLoaded(true), 2000);
  }, []);

  return (
    <>
      {!loaded || netInfo.isConnected ? (
        <StatusBar backgroundColor="white" barStyle={'dark-content'} />
      ) : (
        <>
          <StatusBar backgroundColor="#dc143c" barStyle={'white-content'} />
          <Wrapper>
            <Icon name="error" size={20} color="white" />
            <ErrText>Connection Lost</ErrText>
          </Wrapper>
        </>
      )}
    </>
  );
};

const ErrText = styled(Text)`
  font-family: 'Khula-Bold';
  color: white;
  margin-left: 5px;
  margin-top: 2.5px;
`;

const Wrapper = styled(View)`
  background-color: #dc143c;
  height: 25;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export default ConnectionLost;
