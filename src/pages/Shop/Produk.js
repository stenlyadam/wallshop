import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text
} from 'react-native';
import {
  colors
} from '../../assets';
import { Card, Gap, SearchBar } from '../../components';

const DATA = [
  {
    id: 1,
    name: 'Kaos Club Basket Chicago Bulls',
    harga: 'Rp. 80,000',
    toko: 'Gramedia Sam Ratulangi',
    rating: '4.9',
    jumlahRating: '378',
    terjual: '473',
    image: require('../../assets/images/img-kaos-chicago-bulls.png'),
  },
  {
    id: 2,
    name: 'Sepatu Basket Nike Air Versitile II',
    harga: 'Rp. 8,000,000',
    toko: 'Gramedia Sam Ratulangi',
    rating: '5.0',
    jumlahRating: '378',
    terjual: '473',
    image: require('../../assets/images/img-nike-air-versitile-II.png'),
  },
  {
    id: 3,
    name: 'Laptop Asus ROG Core i7 8750H',
    harga: 'Rp. 14,000,000',
    toko: 'Gramedia Sam Ratulangi',
    rating: '4.8',
    jumlahRating: '378',
    terjual: '473',
    image: require('../../assets/images/img-laptop-rog.png'),
  },
  {
    id: 4,
    name: 'Supreme Cash Gun',
    harga: 'Rp. 1,150,000',
    toko: 'Gramedia Sam Ratulangi',
    rating: '4.9',
    jumlahRating: '378',
    terjual: '473',
    image: require('../../assets/images/img-supreme-cash-gun.png'),
  },
  {
    id: 5,
    name: 'Buku Elon Musk - oleh Ashlee Vance',
    harga: 'Rp. 70,000',
    toko: 'Gramedia Sam Ratulangi',
    rating: '4.7',
    jumlahRating: '378',
    terjual: '473',
    image: require('../../assets/images/img-elon-musk.png'),
  },
  {
    id: 6,
    name: 'Buku Manusia Digital - oleh Chris Skinner',
    harga: 'Rp. 70,000',
    toko: 'Gramedia Sam Ratulangi',
    rating: '4.8',
    jumlahRating: '378',
    terjual: '473',
    image: require('../../assets/images/img-manusia-digital.png'),
  }
];

const Produk = ({title, navigation}) => {
  const renderItem = ({item}) => (
    <Card
      namaProduk={item.name}
      harga={item.harga}
      toko={item.toko}
      rating={item.rating}
      jumlahRating={item.jumlahRating}
      terjual={item.terjual}
      image={item.image}
      onPress={() => navigation.navigate('Dashboard')}
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
        columnWrapperStyle={{justifyContent: 'space-between', flex: 0.5}}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns= {2}
      />
    </View>
  );
};

export default Produk;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.white
    // paddingHorizontal: 5
  },
  textStyle: {
    fontFamily: 'poppins',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 36,
    paddingLeft: 10
  }
});
