import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../assets';
import {Button, SearchBar} from '../../components';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const Product = ({navigation}) => {
  return <View style={styles.page}></View>;
};

export default Product;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'yellow',
  },
});
