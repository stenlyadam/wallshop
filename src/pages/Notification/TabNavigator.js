import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../assets';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Transaksi from './Transaksi';
import Booking from './Booking';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({}) => {
  return (
    <View style={styles.tabNavigatorContainer}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 20,
            fontFamily: fonts.Roboto.medium,
            textTransform: 'capitalize',
          },
          style: {
            borderRadius: 10,
            elevation: 0,
          },
          activeTintColor: colors.red,
          inactiveTintColor: colors.black,
          indicatorStyle: {
            backgroundColor: colors.red,
            height: 3,
            borderRadius: 8,
          },
        }}>
        <Tab.Screen name="Transaksi" component={Transaksi} />
        <Tab.Screen name="Booking" component={Booking} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabNavigatorContainer: {
    height: '100%',
    // paddingHorizontal: 20,
  },
});
