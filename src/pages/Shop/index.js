import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts, IconSearch} from '../../assets';
import {Button, Gap, SearchBar} from '../../components';
import TokoPage from './TokoPage';
import Produk from './Produk';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TopTab from '../../components/molecules/TopTab';
import { useRoute } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

const Mall = () => {
  return <Text>mall</Text>;
};

const Shop = ({navigation}) => {
  
  const route = useRoute();
  
  return (
    <View style={styles.page}>
      <TopTab title={route.name}cd onBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <Text style={styles.questionText}>Mau cari apa hari ini?</Text>
        <Gap height={24} />
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Pilih kategori toko atau produk"
            inlineImageLeft="search"
            inlineImagePadding={30}
          />
        </View>
        <Gap height={19} />
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
            },
            activeTintColor: colors.red,
            indicatorStyle: {
              backgroundColor: colors.red,
              height: 3,
              borderRadius: 8,
            },
          }}>
          <Tab.Screen name="Toko" component={TokoPage}/>
          <Tab.Screen name="Produk" component={Produk} />
          <Tab.Screen name="Mall" component={Mall} />
        </Tab.Navigator>
      </View>
    </View>
  );
};

export default Shop;

const styles = StyleSheet.create({
  textInputContainer: {
    backgroundColor: colors.lightGrey,
    borderRadius: 25,
    paddingHorizontal: 15,
  },
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    flex: 1,
  },
  questionText: {
    fontFamily: fonts.Roboto.medium,
    fontSize: 24,
  },
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
