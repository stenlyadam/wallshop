import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors, fonts} from '../../assets';
import {Button, Gap, SearchBar} from '../../components';
import TopTab from '../../components/molecules/TopTab';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Pembeli from './Pembeli';

const Tab = createMaterialTopTabNavigator();

const Penjual = () => {
  return <Text>Penjual</Text>;
};

const Leaderboard = ({navigation}) => {
  return (
    <View style={styles.page}>
      <TopTab title="Leaderboard" onBack={() => navigation.goBack()} />
      <View style={styles.page}>
        <Tab.Navigator
          tabBarOptions={{
            labelStyle: {fontSize: 15, fontFamily: fonts.Roboto.medium},
            style: {
              backgroundColor: colors.white,
              borderRadius: 10,
              elevation: 0,
            },
            activeTintColor: colors.red,
            indicatorStyle: {
              backgroundColor: colors.red,
              height: 3,
              borderRadius: 8,
            },
          }}>
          <Tab.Screen
            name="Pembeli"
            component={Pembeli}
            navigation={navigation}
          />
          <Tab.Screen name="Penjual" component={Penjual} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Leaderboard;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
