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
import Toko from './Toko';

const DATA = [
  {
    id: 1,
    name: 'Ace Hardware Mantos',
    description: 'Toko perlengkapan rumah',
    rating: '4.9',
    location: 'Mantos, Kota Manado',
    image: require('../../assets/images/img-ace-hardware.png'),
  },
  {
    id: 2,
    name: 'Gramedia',
    description: 'Buku dan perlengkapan belajar',
    rating: '5.0',
    location: 'Mantos, Kota Manado',
    image: require('../../assets/images/img-gramedia.png'),
  },
  {
    id: 3,
    name: '3Second',
    description: 'Fashion & Clothing',
    rating: '4.8',
    location: 'Mantos, Kota Manado',
    image: require('../../assets/images/img-3second.png'),
  },
  {
    id: 4,
    name: 'Sport Station',
    description: 'Fashion & Sport',
    rating: '4.9',
    location: 'MTC, Kota Manado',
    image: require('../../assets/images/img-sport-station.png'),
  },
  {
    id: 5,
    name: 'Miens Souvenir Tikala',
    description: 'Toko oleh - oleh souvenir',
    rating: '4.7',
    location: 'Tikala, Kota Manado',
    image: require('../../assets/images/img-miens-souvenir-tikala.png'),
  },
  {
    id: 6,
    name: 'Maskut Sport',
    description: 'Perlengkapan olahraga basket',
    rating: '4.8',
    location: 'MTC, Kota Manado',
    image: require('../../assets/images/img-maskut-sport.png'),
  },
  {
    id: 7,
    name: 'Maskut Sport',
    description: 'Perlengkapan olahraga basket',
    rating: '4.8',
    location: 'MTC, Kota Manado',
    image: require('../../assets/images/img-maskut-sport.png'),
  },
];

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
        data={DATA}
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
