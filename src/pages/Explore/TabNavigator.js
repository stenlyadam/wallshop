import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../assets';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Regional from './Regional';
import Lokal from './Lokal';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = ({navigation}) => {
  return (
    <View style={styles.tabNavigatorContainer}>
      <Tab.Navigator
        tabBarOptions={{
          labelStyle: {
            fontSize: 15,
            fontFamily: fonts.Roboto.medium,
            textTransform: 'capitalize',
          },
          style: {
            backgroundColor: colors.lightGrey,
            borderRadius: 10,
            elevation: 0,
            marginHorizontal: 20,
          },
          activeTintColor: colors.red,
          indicatorStyle: {
            backgroundColor: colors.red,
            height: 3,
            borderRadius: 8,
          },
        }}>
        <Tab.Screen
          name="Regional"
          component={Regional}
          navigation={navigation}
        />
        <Tab.Screen name="Lokal" component={Lokal} navigation={navigation} />
      </Tab.Navigator>
    </View>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabNavigatorContainer: {
    height: 323,
    // paddingHorizontal: 20,
  },
});
