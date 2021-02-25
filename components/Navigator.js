import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CustomTabButton from '../components/CustomTabButton';
import {tabBarStyle} from './styles/AppStyles';

import NewsFeedScreen from '../screens/NewsFeedScreen';
import CurrentPostScreen from '../screens/CurrentPostScreen';
import AlbumScreen from '../screens/AlbumScreen';

const Navigator = (props) => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const PostsStackScreen = () => {
    return (
      <Stack.Navigator
        headerMode="none"
        initialRouteName="News"
        screenOptions={{
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}>
        <Stack.Screen name="News" component={NewsFeedScreen} />
        <Stack.Screen name="CurrentPost" component={CurrentPostScreen} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarStyle}>
        <Tab.Screen
          name="News"
          component={PostsStackScreen}
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
