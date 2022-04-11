import React from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { colors } from "../../assets";
import { Button } from '../../components';
import dataKategori from '../../components/data/dataKategori';

const Kategori = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.Container}
      onPress={() => navigation.navigate("Details", {item: item})}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.textKategori}>{item.kategori}</Text>
        <Text style={styles.totalProduk}>{item.jumlahProduk} Produk</Text>
      </View>
      <Button
        type="icon-only"
        icon="icon-arrow-right"
        width={15}
        height={15}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.page}>
      <FlatList
        data={dataKategori}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Kategori;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: colors.white
  },
  Container: {
    height: 90,
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 25
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  textKategori: {
    fontSize: 20,
  },
  totalProduk: {
    fontSize: 14,
    color: 'grey',
  },
  textContainer: {
    height: '100%',
    flex: 1,
    justifyContent: 'center',
  }
});
