import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  Signup,
  Dashboard,
  Explore,
  Following,
  Notification,
  Account,
  Product,
  Leaderboard,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  colors,
  fonts,
  IconAccount,
  IconExplore,
  IconFollow,
  IconHome,
  IconNotification,
} from '../assets';
import Catalogue from '../pages/Catalogue';
import mallDetail from '../pages/Mall/mallDetail';
import Details from '../pages/Catalogue/Kategori/Details';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        keyboardHidesTabBar: true,
        activeTintColor: colors.red,
        labelStyle: {
          fontFamily: fonts.Roboto.bold,
          fontSize: 12,
        },
        tabStyle: {
          paddingTop: 5,
        },
        style: {
          height: 50,
          paddingBottom: 2,
          borderTopWidth: 1,
          borderTopColor: colors.grey,
        },
      }}>
      <Tab.Screen
        name="Beranda"
        component={Dashboard}
        options={{
          tabBarLabel: 'Beranda',
          tabBarIcon: ({color, size}) => <IconHome color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({color, size}) => (
            <IconExplore color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Mengikuti"
        component={Following}
        options={{
          tabBarLabel: 'Mengikuti',
          tabBarIcon: ({color, size}) => (
            <IconFollow color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifikasi"
        component={Notification}
        options={{
          tabBarLabel: 'Notifikasi',
          tabBarIcon: ({color, size}) => (
            <IconNotification color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Akun"
        component={Account}
        options={{
          tabBarLabel: 'Akun',
          tabBarIcon: ({color, size}) => (
            <IconAccount color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="BottomNavigator">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dashboard"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DashboardPage"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Explore"
        component={Explore}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Catalogue"
        component={Catalogue}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="mallDetail"
        component={mallDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
