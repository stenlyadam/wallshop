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
import dataProduk from '../../components/data/dataProduk';

const Product = ({ navigation }) => {
  const renderItem = ({item}) => (
    <Card
      namaProduk={item.name}
      harga={item.harga}
      toko={item.toko}
      rating={item.rating}
      jumlahRating={item.jumlahRating}
      terjual={item.terjual}
      image={item.image}
      onPress={() => navigation.navigate('Dashboard', {
        item: item
      })
    }
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
        data={dataProduk}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns= {2}
      />
    </View>
  );
};

export default Product;

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
