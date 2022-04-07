import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  colors,
} from '../../assets';
import { Gap, SearchBar } from '../../components';
import dummyData from './dummyData';
import Toko from './Toko';

const TokoPage = ({onPress, navigation}) => {
  const renderItem = ({item}) => (
    <Toko
      shopName={item.name}
      shopDescription={item.description}
      rating={item.rating}
      location={item.location}
      image={item.image}
      onPress={() => navigation.navigate('ShopDetail')}
    />
  );
  return (
    <View style={styles.page}>
      <View style={{paddingHorizontal: 20}} >
        <Text style={styles.textStyle} >
          Ayo eksplorasi
        </Text>
        <Gap height={10}/>
        <SearchBar />
        <Gap height={20}/>
      </View>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default TokoPage;

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: 'poppins',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 36,
    paddingLeft: 10
  },
  page: {
    backgroundColor: colors.white,
    flex: 1,
    paddingTop: 15,
  },
});
