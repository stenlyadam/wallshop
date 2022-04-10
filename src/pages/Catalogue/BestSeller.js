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

const BestSeller = ({ navigation }) => {
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

export default BestSeller;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.white
  },
  textStyle: {
    fontFamily: 'poppins',
    fontWeight: '500',
    fontSize: 24,
    lineHeight: 36,
    paddingLeft: 10
  }
});
