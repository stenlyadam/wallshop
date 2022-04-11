import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Card, Gap, SearchBar } from '../../components'
import TopTab from '../../components/molecules/TopTab'
import dataProduk from '../../components/data/dataProduk'
import { colors } from '../../assets'

const Details = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Card
      namaProduk={item.name}
      harga={item.harga}
      toko={item.toko}
      rating={item.rating}
      jumlahRating={item.jumlahRating}
      terjual={item.terjual}
      image={item.image}
      onPress={() =>
        navigation.navigate("Dashboard", {
          item: item,
        })
      }
    />
  );
  return (
    <View style={styles.page}>
      <TopTab title="Kategori" onBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <SearchBar />
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-around", flex: 0.5 }}
          style={{paddingHorizontal: 10, marginTop: 10}}
          showsHorizontalScrollIndicator={false}
          data={dataProduk}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </View>
    </View>
  );
}

export default Details

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white
  },
  container: {
    flex: 1,
  },
})