import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabButton from '../components/CustomTabButton';
import {tabBarStyle} from './styles/AppStyles';

import NewsListScreen from '../screens/NewsListScreen';
import NewsDetailsScreen from '../screens/NewsDetailsScreen';
import AlbumScreen from '../screens/AlbumScreen';

const Navigator = (props) => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const NewsStackScreen = () => {
    return (
      <Stack.Navigator
        headerMode="none"
        initialRouteName="News"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="News" component={NewsListScreen} />
        <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarStyle}>
        <Tab.Screen
          name="News"
          component={NewsStackScreen}
          options={{tabBarButton: CustomTabButton}}
        />
        <Tab.Screen
          name="Albums"
          component={AlbumScreen}
          options={{tabBarButton: CustomTabButton}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
