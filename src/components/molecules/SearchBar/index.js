import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {colors, fonts, IconWorld} from '../../../assets';
import {Button} from '../../../components';

const SearchBar = ({type, width = 300}) => {
  if (type === 'dashboard') {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchBoxContainer(width)}>
          <Button type="icon-only" icon="icon-menu" />
          <TextInput
            style={styles.searchBoxTextContainer}
            placeholder="Cari produk, iklan atau toko..."
            placeholderTextColor="#C7C7CD"
          />
          <IconWorld />
        </View>
        <Button type="icon-only" icon="icon-cart" />
      </View>
    );
  } else {
    return (
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Button type="icon-only" icon="icon-search" />
          <TextInput
            style={styles.searchBoxTextContainer}
            placeholder="Cari produk, iklan atau toko..."
            placeholderTextColor="#C7C7CD"
          />
        </View>
      </View>
    );
  }
};

export default SearchBar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBoxContainer: width => ({
    backgroundColor: 'white',
    width: width,
    height: 46,
    flexDirection: 'row',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 14,
  }),
  searchBoxTextContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  searchBox: {
    backgroundColor: 'white',
    flex: 1,
    height: 42,
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 25,
    borderColor: 'grey',
    paddingHorizontal: 22,
  }
});
