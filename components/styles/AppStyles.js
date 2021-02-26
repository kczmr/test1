import {View} from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
  flex: 1;
  background-color: #e5e5e5;
`;

export const EmptyView = styled(View)`
  height: 15px;
`;

export const IndicatorWrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const tabBarStyle = {
  activeTintColor: '#5361c7',
  inactiveTintColor: '#7e8893',
  labelStyle: {
    fontFamily: 'Khula-Bold',
    fontSize: 14,
  },
  style: {
    height: 60,
  },
  labelPosition: 'beside-icon',
  keyboardHidesTabBar: true,
};
